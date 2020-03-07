#!/usr/bin/env node
/* jshint esversion: 6 */

const fs = require('fs');
const path = require('path');
const argv = require('optimist').argv;

function travelSync(dir, callback, finish) {
    fs.readdir(dir, function(e, files) {
        if (e === null) {
            (function next(i) {
                if (i < files.length) {
                    let fullPath = path.join(dir, files[i]);
                    if (
                        fs.stat(fullPath, function(e, stats) {
                            if (stats.isDirectory()) {
                                travelSync(fullPath, callback, function() {
                                    next(i + 1);
                                });
                            } else {
                                let fileName = files[i];
                                callback(e, fullPath, fileName, function() {
                                    next(i + 1);
                                });
                            }
                        })
                    );
                } else {
                    /**
                     * 当 i >= files.length 时，即表示当前目录已经遍历完了， 需遍历下一个文件夹
                     * 这里执行的时递归调用 传入的 方法 ， 方法里调用了 next(i) 记录了当前遍历位置
                     */
                    finish?.();
                }
            })(0);
        } else {
            callback(e);
        }
    });
}

if (argv.d || argv.dir) {
    let dir = argv.d || argv.dir;
    travelSync(dir, function(e, fullPath, fileName, next) {
        if (e !== null) {
            console.log(e);
        }
        fs.rename(fullPath, path.join(dir, fileName), (err) => {
            console.log(err);
            next();
        });
    });
}
