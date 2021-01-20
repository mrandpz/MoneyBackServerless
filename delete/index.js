var getRawBody = require("raw-body");

var { MongoClient, ObjectID } = require("mongodb");
const { url, dbname, collection } = require("./serverAddress");

module.exports.handler = function (req, resp, context) {
  getRawBody(req, function (err, body) {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
      if (err) throw err;
      const requestPayload = JSON.parse(body.toString());
      const whereStr = {
        _id: ObjectID(requestPayload._id),
      };

      var dbo = db.db(dbname);
      dbo.collection(collection).deleteOne(whereStr, function (err, obj) {
        if (err) throw err;
        console.log("文档删除成功");
        db.close();
        resp.send(
          JSON.stringify({
            code: 200,
          })
        );
      });
    });
  });
};
