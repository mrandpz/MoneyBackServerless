/*
 * @Author: Mr.pz
 * @Date: 2021-01-18 10:17:34
 * @Last Modified by: Mr.pz
 * @Last Modified time: 2021-01-18 10:18:29
 *
 * { type: 1 }  // 按 type 字段升序
 * { type: -1 } // 按 type 字段降序
 *
 */

var MongoClient = require("mongodb").MongoClient;
const { url, dbname, collection } = require("./serverAddress");

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db(dbname);
  var mysort = { title: -1 };
  dbo
    .collection(collection)
    .find()
    .sort(mysort)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
