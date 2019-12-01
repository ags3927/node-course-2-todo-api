const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5de3fdfae4d5483a2a846b7b1';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('\nTodo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('\nTodo By Id', todo);
// }).catch((e) => console.log(e));


var id = '5de2d24b68d3477ed43cba75';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('\n User By Id', user);
}, (e) => {
  console.log(e);
});
