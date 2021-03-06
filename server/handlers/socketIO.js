const logger = require('./logger.js')('socketIO');
const FileIO = require('./fileIO');
const path = require('path');
const fio = new FileIO();
const util = require('./util');
const os = require('os');
let socketIds = [];

function SocketIO() { }

SocketIO.prototype.initialize = (io) => {
    io.on('connection', function (socket) {
        logger.debug(`${socket.id} is connection`);
        socket.on('disconnect', function () {
            logger.debug(`${socket.id} is disconnected`);
        });

        // 读取文件
        socket.on('s-readline', function () {
            let isExistSocketId = new SocketIO().isExistSocketId(socket.id);
            logger.debug(`${socket.id} is Exist?：${isExistSocketId}`);
            if (!isExistSocketId) {
                socketIds.push(socket.id);
                socket.emit('c-readline', `${socket.id} start readline`);
                const tail = fio.tail(path.resolve(new FileIO().getRootDirtory(), 'log/test.log'));
                // 停止订阅
                socket.on('s-stopRead', function () {
                    tail.unwatch();
                    new SocketIO().removeSocketId(socket.id);
                    socket.emit('c-readline', `${socket.id} has stopped`);
                })
                tail.on('line', (line) => {
                    socket.emit('c-readline', `${socket.id}:${line}`);
                }).on('error', (error) => {
                    tail.unwatch();
                    logger.error(error);
                })
            }
        });
        // 服务器性能状态
        socket.on('s-cpuStatus', function () {
            // 上次cpu监听状态
            let oldCpu = util.getCpuAvg();
            setInterval(() => {
                let cpuPercent = util.getCpuDiff(oldCpu, util.getCpuAvg());
                oldCpu = util.getCpuAvg();
                socket.emit('c-cpuStatus', {
                    cpu: cpuPercent,
                    date: new Date()
                });
            }, 3000);
        })

        socket.on('s-heapStatus', function () {
            setInterval(() => {
                socket.emit('c-heapStatus', {
                    heap: util.getHeapUsage(),
                    date: new Date()
                });
            }, 3000);
        })
    });
}

SocketIO.prototype.isExistSocketId = (socketId) => {
    for (let sId of socketIds) {
        if (sId === socketId) {
            return true;
        }
    }
    return false;
}

SocketIO.prototype.removeSocketId = (socketId) => {
    for (let index in socketIds) {
        if (socketIds[index] === socketId) {
            socketIds.splice(index, 1);
            logger.debug('已删除：' + socketId);
            break;
        }
    }
}
module.exports = SocketIO;