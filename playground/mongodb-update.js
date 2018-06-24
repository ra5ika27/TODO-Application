const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b2b4b39374646370c637e32')
  }, {
    $set: {
      name: 'Hout'
    },
    $inc: {
      age: 1 //increment age by 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  //client.close();
});
