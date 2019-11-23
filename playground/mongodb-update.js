//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useUnifiedTopology: true}, (err, client) => {

  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos')
  //   .findOneAndUpdate({
  //     _id: new ObjectID('5dd903c0d438ef5ba7055b59')
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users')
    .findOneAndUpdate({
      _id: new ObjectID('5dd829298ea36e3fd3862830')
    }, {
      $set: {
        name: 'Aniruddha'
      },
      $inc: {
        "age": -1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

  //client.close();

});
