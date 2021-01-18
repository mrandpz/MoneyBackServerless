var MongoClient = require("mongodb").MongoClient;
const { url, dbname, collection } = require("./serverAddress");

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db(dbname);
  var whereStr = { title: "title" }; // 查询条件
  var updateStr = { $set: { url: "updateMany" } };
  dbo
    .collection(collection)
    .updateMany(whereStr, updateStr, function (err, res) {
      if (err) throw err;
      console.log(res.result.nModified + " 条文档被更新");
      db.close();
    });
});
