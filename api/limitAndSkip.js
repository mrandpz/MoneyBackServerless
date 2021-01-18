var MongoClient = require("mongodb").MongoClient;
const { url, dbname, collection } = require("./serverAddress");

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db(dbname);
//   dbo
//     .collection(collection)
//     .find()
//     .limit(2)
//     .toArray(function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
// });

// 跳过前两条

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db(dbname);
  dbo
    .collection(collection)
    .find()
    .skip(2)
    .limit(2)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
