const MongoClient = require("mongodb").MongoClient;
const { url, dbname, collection } = require("./serverAddress");

function createConnect() {
  return new Promise((res, rej) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db(dbname);
      res({ db, dbo: dbo.collection(collection) });
    });
  });
}

module.exports = createConnect;
