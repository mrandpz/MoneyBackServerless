var MongoClient = require("mongodb").MongoClient;
const { url, dbname, collection } = require("./serverAddress");

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db(dbname);
  var whereStr = { title: "title3" }; // 查询条件
  var updateStr = { $set: { url: "titleUpdate1" } };
  dbo
    .collection(collection)
    .updateOne(whereStr, updateStr, function (err, res) {
      if (err) throw err;
      console.log("文档更新成功");
      db.close();
    });
});
