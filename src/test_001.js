/* jshint esversion: 8 */

/**
 * 请写出两种或两种以上实现方法满足: execute 对应的id按顺序打印
 * PS: 尝试只修改start函数体
 *
 * 输出结果参考:
 * id 0
 * id 1
 * id 2
 * id 3
 * id 4
 */

function start(id) {
    this.promises = !this.promises ? execute(id) : this.promises.then(() => execute(id));
}

for (let i = 0; i < 5; i++) {
    start(i);
}

function sleep() {
    const duration = Math.floor(Math.random() * 500);
    return new Promise((resolve) => setTimeout(resolve, duration));
}

function execute(id) {
    return sleep().then(() => {
        console.log('id', id);
    });
}
