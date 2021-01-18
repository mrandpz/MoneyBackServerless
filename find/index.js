var getRawBody = require("raw-body");
var getFormBody = require("body/form");
var body = require("body");

/*
if you open the initializer feature, please implement the initializer function, as below:
module.exports.initializer = function(context, callback) {
    console.log('initializing');
    callback(null, '');
};
*/
var MongoClient = require("mongodb").MongoClient;
const { url, dbname, collection } = require("./serverAddress");

// todo  表名 由用户传入
module.exports.handler = function (req, resp, context) {
  getRawBody(req, function (err, body) {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db(dbname);
      dbo
        .collection(collection)
        .find({})
        .toArray(function (err, result) {
          // 返回集合中所有数据
          if (err) throw err;
          console.log(result);
          db.close();
          resp.send(JSON.stringify({ code: 200, data: result }));
        });
    });
  });
};
