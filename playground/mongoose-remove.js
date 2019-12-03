const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove( {
  _id: '5de6cd7608e434cc52718559'
}, {useFindAndModify: false}).then((todo) => {
  console.log(todo);
});


// Todo.findByIdAndRemove('5de6ccec08e434cc52718522').then((todo) => {
//   console.log(todo);
// });
