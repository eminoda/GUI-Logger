const path = new require('path');
const fs = require('fs');
const FileIO = require('../handlers/fileIO.js');
const fio = new FileIO();
const logger = require('../handlers/logger.js')('test');

const logFile = path.join(__dirname, '../log', 'test.log');

// fio.ioReadLine(logFile).on('line', (line) => {
//     logger.info(line);
// });

// const tail = fio.tail(logFile);
// tail.on('line', (line) => {
//     logger.info(line);
// }).on('error', (error) => {
//     logger.error(error);
//     tail.unwatch();
// });

// let i = 0;
// setInterval(() => {
//     if (fio.isExist(fio.getRootDirtory(), '/log/test.log')) {
//         fs.appendFileSync(fio.getRootDirtory() + '/log/test.log', '\r\n' + Date.now() + ` : ${i++}`);
//     }
// }, 1000);