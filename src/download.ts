import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import * as https from 'https';

type IoadImg = (url: string) => Promise<HTMLImageElement>;

type DownloadFile = (url: string, filePath: string, fileName: string) => Promise<string | Buffer>;

export const loadImg: IoadImg = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function() {
            console.log('image loaded');
            resolve(img);
        };
        img.onerror = function() {
            reject(new Error('Could not load image at' + url));
        };
        img.src = url;
    });
};

export const downloadFile: DownloadFile = (url, filePath, fileName) => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
        }
        const targetPath = path.resolve(filePath, fileName);
        const writeStream = fs.createWriteStream(targetPath);
        const client = url.slice(0, 5) === 'https' ? https : http;
        client.get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(res.statusCode);
            }
            res.on('end', () => {
                console.log('finish download');
            });
            writeStream
                .on('finish', () => {
                    writeStream.close();
                    resolve(writeStream.path);
                })
                .on('error', (err: ErrorConstructor) => {
                    fs.unlinkSync(targetPath);
                    reject(err);
                });
            res.pipe(writeStream);
        });
        console.log('flag');
    });
};
