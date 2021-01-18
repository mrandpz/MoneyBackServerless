var MongoClient = require("mongodb").MongoClient;
const { url, collection, dbname } = require("./serverAddress");

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  console.log("数据库已创建");
  var dbase = db.db(dbname);
  dbase.createCollection(collection, function (err, res) {
    if (err) throw err;
    console.log("创建集合!");
    db.close();
  });
});
