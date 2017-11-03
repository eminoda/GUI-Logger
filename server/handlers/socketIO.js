const logger = require('./logger.js')('socketIO');
const FileIO = require('./fileIO');
const path = require('path');
const fio = new FileIO();

function SocketIO() { }

SocketIO.prototype.initialize = (io) => {
    io.on('connection', function (socket) {
        logger.debug(`${socket.id} is connection`);

        socket.on('disconnect', function () {
            logger.debug(`${socket.id} is disconnected`);
        });

        // 读取文件
        socket.on('s-readline', function (readStatus) {
            console.log(readStatus);
            logger.debug('s-readline is active');
            const tail = fio.tail(path.resolve(new FileIO().getRootDirtory(), 'log/test.log'));
            // 停止订阅
            if (!readStatus) {
                tail.unwatch();
            }
            tail.on('line', (line) => {
                logger.debug(line);
                socket.emit('c-readline', line);
            }).on('error', (error) => {
                logger.error(error);
                tail.unwatch();
            })
        });
    });
}

module.exports = SocketIO;