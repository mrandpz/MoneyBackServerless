var MongoClient = require("mongodb").MongoClient;
const { url, dbname, collection } = require("./serverAddress");

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db(dbname);
  var myobj = { title: "title", content: "内容" };
  dbo.collection(collection).insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("文档插入成功");
    db.close();
  });
});
