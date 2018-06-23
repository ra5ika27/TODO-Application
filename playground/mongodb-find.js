const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

//   db.collection('Todos').find({
//     _id: new ObjectID('5b2b49f3d289b536e4070faa')
//   }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     console.log('Unable to fetch todos', err);
//   });
//   client.close();
// });

db.collection('Todos').find({
  _id: new ObjectID('5b2b49f3d289b536e4070faa')
}).count().then((count) => {
  console.log(`Todo count: ${count}`);

}, (err) => {
  console.log('Unable to fetch todos', err);
});
client.close();
});
