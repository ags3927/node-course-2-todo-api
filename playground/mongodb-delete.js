//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useUnifiedTopology: true}, (err, client) => {

  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos')
  //   .deleteMany({text: 'meet sheium'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // db.collection('Todos')
  //   .deleteOne({text: 'meet sheium'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // db.collection('Users')
  //   .findOneAndDelete({_id: new ObjectID("5dd7ece479fc142a413387b5") })
  //   .then((results) => {
  //     console.log(JSON.stringify(result, undefined, 2));
  //   });

  // db.collection('Users')
  //   .deleteMany({name: 'Aniruddha'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  //client.close();

});
