const log4js = require('log4js');
log4js.configure('config/log.json');

exports = module.exports = (catgory) => {
    return log4js.getLogger(catgory);
}