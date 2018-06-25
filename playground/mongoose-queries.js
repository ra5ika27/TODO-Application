const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users')

var id = '5b3021634f92f23d7f4fbe1f';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
// Todo.find({
//   //mongoose will take the string id and automatically convert it to an object ID
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// //Finds the first one which matches the id
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// find todo by id
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todos by Id', todo);
// }).catch((e) => console.log(e));

//for more methods go to mongoosejs.com -> read docs

//find user by id
User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User by Id', user);
}).catch((e) => console.log(e));
