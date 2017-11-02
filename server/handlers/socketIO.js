const logger = require('./logger.js')('socketIO');
const FileIO = require('./fileIO');
const path = require('path');
const fio = new FileIO();

function SocketIO() { }

SocketIO.prototype.initialize = (io) => {
    io.on('connection', function (socket) {
        logger.info(`${socket.id} is connection`);

        socket.on('disconnect', function () {
            logger.info(`${socket.id} is disconnected`);
        });

        // 读取文件
        socket.on('s-readfile', function (user) {
            const tail = fio.tail(path.resolve(new FileIO().getRootDirtory(), 'log/test.log'));
            tail.on('line', (line) => {
                logger.debug(line);
                socket.emit('c-readfile', line);
            }).on('error', (error) => {
                logger.error(error);
                tail.unwatch();
            })
        });
    });
}

module.exports = SocketIO;