var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://user41008589@dds-wz9ut506vqrlvggu-pub.mongodb.rds.aliyuncs.com:3717/?authSource=admin";

module.exports.handler = function (req, resp, context) {
  getRawBody(req, function (err, body) {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("runoob");
      dbo
        .collection("site")
        .find({})
        .toArray(function (err, result) {
          // 返回集合中所有数据
          if (err) throw err;

          console.log(result);
          db.close();
          resp.send(result);
        });
    });
  });
};
