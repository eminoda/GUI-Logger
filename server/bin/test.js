const path = new require('path');
const fs = require('fs');
const FileIO = require('../handlers/fileIO.js');
const fio = new FileIO();
const logger = require('../handlers/logger.js')('test');

const logFile = path.join(__dirname, '../log', 'test.log');

const v8 = require('v8');
const os = require('os');
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

// setInterval(() => {
// const cpuUsage = process.cpuUsage();
//     const memoryUsage = process.memoryUsage();
// let cpuUsePercent = cpuUsage.user / cpuUsage.system * 100 + '%';
//     console.log(cpuUsage);
// console.log(cpuUsage);
//     const size = 1024 * 1024;
//     const rss = memoryUsage.rss / size;
//     const heapTotal = memoryUsage.heapTotal / size;
//     const heapUsed = memoryUsage.heapUsed / size;
//     const external = memoryUsage.external / size;
//     console.log(`rss:${rss},heapTotal:${heapTotal},heapUsed:${heapUsed},external:${external}`);
// }, 3000);

// setInterval(() => {
//     const size = 1024 * 1024;
//     console.log(`%${os.freemem() / os.totalmem() * 100}%`);
// }, 2000)

// var startTime = process.hrtime();
// var startUsage = process.cpuUsage();

// // spin the CPU for 500 milliseconds
// const now = Date.now();
// while (Date.now() - now < 500);

// // while耗时
// var elapTime = process.hrtime(startTime);
// // cpu消耗
// var elapUsage = process.cpuUsage(startUsage);//microsecond 
// var elapTimeMS = hrtimeToMS(elapTime);
// console.log(`elapTimeMS:${elapTimeMS}`);

// var elapSysMS = carryOver(false, elapUsage.system);
// var elapUserMS = carryOver(false, elapUsage.user);
// console.log(elapSysMS + elapUserMS);


// 毫秒
function hrtimeToMS(hrtime) {
    // hritime //[seconds, nanoseconds]
    return carryOver(true, hrtime[0]) + carryOver(false, hrtime[1], 1000 * 1000)
}

/**
 * 换位
 * @param {*} direction true换小，false换大
 * @param {*} value 
 * @param {*} size 
 */
function carryOver(direction, value, size) {
    size = size || 1000;
    return direction ? value * size : value / size;
}

const util = require('../handlers/util.js');

let oldCpu = util.getCpuAvg();
setInterval(() => {
    console.log(util.getCpuDiff(oldCpu, util.getCpuAvg()));
    oldCpu = util.getCpuAvg();
}, 2000);