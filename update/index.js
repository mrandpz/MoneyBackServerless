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

      const updateStr = {
        $set: {
          done: true,
        },
      };

      var dbo = db.db(dbname);
      dbo
        .collection(collection)
        .updateOne(whereStr, updateStr, function (err, obj) {
          if (err) throw err;
          db.close();
          resp.send(
            JSON.stringify({
              code: 200,
              message: "update success",
            })
          );
        });
    });
  });
};
