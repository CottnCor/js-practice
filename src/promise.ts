import * as path from 'path';
import { downloadFile } from './download';

const filePath = './assets/';

const urls = [
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png'
];

/////////////////////////////

interface LimitLoad {
  (
    limit: number,
    urls: string[],
    executor: (url: string, filePath: string, fileName: string) => Promise<string | Buffer>
  ): Promise<number[]>;
}

const limitLoad: LimitLoad = (limit, urls, executor) => {
  let sequence = [...urls];
  let promises = sequence.splice(0, limit).map((url, index) => {
    return executor(url, filePath, path.basename(url)).then(() => {
      return index;
    });
  });
  return sequence
    .reduce((collect, url) => {
      return collect
        .then(() => {
          return Promise.race(promises);
        })
        .then((fastestIndex: number) => {
          promises[fastestIndex] = executor(url, filePath, path.basename(url)).then(() => {
            return fastestIndex;
          });
        })
        .catch((err: ErrorConstructor) => {
          console.error(err);
        });
    }, Promise.resolve())
    .then(() => {
      return Promise.all(promises);
    });
};

//////////////////////////////////////////////

// limitLoad(3, urls, downloadFile)
//   .then((value: number[]) => {
//     console.log(value);
//     console.log('all image loaded');
//   })
//   .catch((err: ErrorConstructor) => {
//     console.error(err);
//   });

//////////////////////////////////////////////

interface PromiseValWapper<T> {
  err: ErrorConstructor;
  res: T;
}

interface PromiseWapper {
  <T>(promise: Promise<T>): Promise<PromiseValWapper<T>>;
}

const promiseWapper: PromiseWapper = <T>(promise: Promise<T>) => {
  if (!promise || !Promise.prototype.isPrototypeOf(promise)) {
    return new Promise<PromiseValWapper<T>>((resolve, reject) => {
      reject(new Error('requires promises as the param'));
    }).catch((err: ErrorConstructor) => {
      return { err, res: null };
    });
  }
  const fulfilled: (res: T) => PromiseValWapper<T> = function(res) {
    return { err: null, res };
  };
  const rejected: (err: ErrorConstructor) => PromiseValWapper<T> = function(err) {
    return { err, res: null };
  };
  return promise.then(fulfilled).catch(rejected);
};

//////////////////////////////////////////////////

(async function() {
  const { err, res } = await promiseWapper<number[]>(limitLoad(3, urls, downloadFile));
  if (err) {
    console.error(err);
  } else {
    console.log(res);
    console.log('all image loaded');
  }
})();
