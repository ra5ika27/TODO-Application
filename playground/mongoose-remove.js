const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users')

//remove all
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//find one and remove
//Todo.findOneAndRemove
//Todo.findByIdAndRemove
Todo.findOneAndRemove({_id: '5b31dc74f28e7571c02f99e8'}).then((todo) => {
  console.log(todo);
})

Todo.findByIdAndRemove('5b31dc74f28e7571c02f99e8').then((todo) => {
  console.log(todo);
});
