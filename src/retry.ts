import { promiseWapper } from './promise';

const delay = (gap = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, gap);
    });
};

const recursion = <T, F extends Function>(
    current: number,
    limit: number,
    asyncFun: F,
    resolve: (value: T) => void,
    reject: (value: ErrorConstructor) => void
) => {
    delay().then(() => {
        console.log(`limit: ${limit}, current: ${current}`);
        (async function() {
            const { err, res } = await promiseWapper<T>(asyncFun());
            if (err) {
                if (current < limit) {
                    recursion(++current, limit, asyncFun, resolve, reject);
                } else {
                    reject(err);
                }
            } else {
                resolve(res);
            }
        })();
    });
};

const retry = <T, F extends Function>(asyncFun: F, limit: number) => {
    return new Promise((resolve: (value: T) => void, reject: (value: ErrorConstructor) => void) => {
        let current = 1;
        (async function() {
            const { err, res } = await promiseWapper<T>(asyncFun());
            if (err) {
                if (current < limit) {
                    recursion(++current, limit, asyncFun, resolve, reject);
                } else {
                    reject(err);
                }
            } else {
                resolve(res);
            }
        })();
    });
};

// //////////////////////////////////////

interface P {
    random: number;
}

type Fun = () => Promise<P>;

class X {
    public a = { x: 11, y: 10 };
    test: Fun = function(this: X) {
        return new Promise((resolve, reject) => {
            const random = Math.floor(Math.random() * 100);
            setTimeout(() => {
                console.log(`a: ${this.a.x}, random: ${random}`);
                if (random > 50) {
                    resolve({ random });
                } else {
                    reject(new Error('error: '));
                }
            }, 1000);
        });
    };
}

(async function() {
    const x = new X();
    const test = x.test;
    const { err, res } = await promiseWapper<P>(retry<P, Fun>(test.bind(x), 5));
    if (err) {
        console.error(err.toString());
    } else {
        console.log(res.random);
    }
})();
