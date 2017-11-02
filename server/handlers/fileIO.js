const fs = require('fs');
const util = require('util');
const path = require('path');
const EventEmitter = require('events');
const readline = require('linebyline');
const Tail = require('tail').Tail;
const logger = require('./logger.js')('fileIO');

// 文件读取
function FileIO() {
}

// 逐行读取
FileIO.prototype.ioReadLine = (filePath) => {
    logger.debug(filePath);
    return readline(filePath);
};

// 输出最新文件
FileIO.prototype.tail = (filePath) => {
    logger.debug(filePath);
    return new Tail(filePath);
};

FileIO.prototype.getRootDirtory = () => {
    const rootDir = path.join(__dirname, '..');
    logger.debug(rootDir);
    return rootDir;
}

// 文件是否存在
FileIO.prototype.isExist = (filePath) => {
    let wholeFilePath = path.resolve(new FileIO().getRootDirtory(), filePath);
    logger.debug(wholeFilePath);
    return fs.existsSync(wholeFilePath);
};

module.exports = FileIO;