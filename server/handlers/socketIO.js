const logger = require('./logger.js')('socketIO');
const FileIO = require('./fileIO');
const fio = new FileIO();

function SocketIO() { }

SocketIO.prototype.initialize = () => {
    this.io.on('connection', function (socket) {
        logger.info(`${socket.id} is connection`);

        socket.on('disconnect', function () {
            logger.info(`${socket.id} is disconnected`);
        });

        // 读取文件
        socket.on('s-readfile', function (user) {
            const tail = fio.tail(logFile);
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