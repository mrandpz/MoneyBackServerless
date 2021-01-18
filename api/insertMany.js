var MongoClient = require("mongodb").MongoClient;
const { url, dbname, collection } = require("./serverAddress");

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db(dbname);
  var myobj = [
    { title: "title3", content: "内容3" },
    { title: "title4", content: "内容4" },
    { title: "title5", content: "内容5" },
  ];
  dbo.collection(collection).insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("插入的文档数量为: " + res.insertedCount);
    db.close();
  });
});
