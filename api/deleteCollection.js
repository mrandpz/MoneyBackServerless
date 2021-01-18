var MongoClient = require("mongodb").MongoClient;
const { url, dbname } = require("./serverAddress");

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db(dbname);
  // 删除 test 集合
  dbo.collection("222").drop(function (err, delOK) {
    // 执行成功 delOK 返回 true，否则返回 false
    if (err) throw err;
    if (delOK) console.log("集合已删除");
    db.close();
  });
});
