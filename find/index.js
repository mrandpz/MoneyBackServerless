var getRawBody = require("raw-body");

var MongoClient = require("mongodb").MongoClient;
const { url, dbname, collection } = require("./serverAddress");

// todo  表名 由用户传入
module.exports.handler = function (req, resp, context) {
  getRawBody(req, function (err, body) {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db(dbname);
      const mysort = { done: 1 };
      dbo
        .collection(collection)
        .find({})
        .sort(mysort)
        .toArray(function (err, result) {
          // 返回集合中所有数据
          if (err) throw err;
          db.close();
          resp.send(
            JSON.stringify({
              code: 200,
              data: result,
            })
          );
        });
    });
  });
};
