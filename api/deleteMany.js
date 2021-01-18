/*
 * @Author: Mr.pz
 * @Date: 2021-01-18 10:15:56
 * @Last Modified by:   Mr.pz
 * @Last Modified time: 2021-01-18 10:15:56
 * 删除多条数据
 */

var MongoClient = require("mongodb").MongoClient;
const { url, dbname, collection } = require("./serverAddress");

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db(dbname);
  var whereStr = { title: "title4" }; // 查询条件
  dbo.collection(collection).deleteMany(whereStr, function (err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " 条文档被删除");
    db.close();
  });
});
