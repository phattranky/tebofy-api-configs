var mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://mongo:27017/tebofy', (err, db) => {
  console.log('err', err);
  db.close();
});
