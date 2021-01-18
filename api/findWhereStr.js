var MongoClient = require("mongodb").MongoClient;
const { url, dbname, collection } = require("./serverAddress");

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db(dbname);
  var whereStr = { content: "内容3" }; // 查询条件
  dbo
    .collection(collection)
    .find(whereStr)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
