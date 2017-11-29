const mongoose = require('mongoose');
const promise = require('bluebird');

const connection = mongoose.connect('mongodb://192.168.1.65:27017/test', {
    useMongoClient: true,
    user: 'test',
    pass: 'a111111',
    promiseLibrary: promise
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('connection run');
});

module.exports = mongoose;