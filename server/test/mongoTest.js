const mongo = require('../handlers/mongo.js');
const mongoose = require('mongoose');
const Promise = require('bluebird');

const loggerSchema = new mongo.Schema({
    id: Number,
    message: String,
    stack: String,
    type: String
});

const Logger = mongoose.model('Logger', loggerSchema);

function save(model, logger) {
    return new Promise((resolve, reject) => {
        model.create(logger, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        })
    })
}

function remove(logger, params) {
    return new Promise((resolve, reject) => {
        model.remove(params, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        })
    })
}

// http://mongoosejs.com/docs/queries.html
function queryOneByParams(model, params) {
    return new Promise((resolve, reject) => {
        model.findOne(params, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        })
    })
}

function queryListByParams(model, params) {
    return new Promise((resolve, reject) => {
        model.find(params, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        })
    })
}

function queryCount(model, params) {
    return new Promise((resolve, reject) => {
        model.count(params, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        })
    })
}

// http://mongoosejs.com/docs/api.html#model_Model.update
// https://docs.mongodb.com/manual/reference/operator/query/
function update(model, params, params2) {
    return new Promise((resolve, reject) => {
        model.update(params, params2, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        })
    })
}

// update(Logger, { message: { $eq: 'b' } }, { message: 'modify b' }).then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// queryCount(Logger, { id: 1 }).then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// queryListByParams(Logger, { id: 1 }).then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// queryOneByParams(Logger, { id: 1 }).then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// save(Logger, {
//     id: 2,
//     message: 'b'
// }).then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

