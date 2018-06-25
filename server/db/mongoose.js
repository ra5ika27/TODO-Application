var mongoose = require('mongoose');

//indicates that we use built in promise
mongoose.Promise = global.Promise;
//connecting to db
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
