var getRawBody = require("raw-body");

var MongoClient = require("mongodb").MongoClient;
const { url, dbname, collection } = require("./serverAddress");

module.exports.handler = function (req, resp, context) {
  getRawBody(req, function (err, body) {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
      if (err) throw err;
      const requestPayload = JSON.parse(body.toString());
      const insertObject = {
        title: requestPayload.title,
        done: false,
      };

      var dbo = db.db(dbname);
      dbo.collection(collection).insertOne(insertObject, (err, res) => {
        if (err) throw err;
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
