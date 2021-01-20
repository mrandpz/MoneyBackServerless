/*
 * @Author: Mr.pz
 * @Date: 2021-01-18 10:14:52
 * @Last Modified by: Mr.pz
 * @Last Modified time: 2021-01-20 19:22:57
 * 只删除第一条
 */

var MongoClient = require("mongodb").MongoClient;
const { url, dbname, collection } = require("./serverAddress");

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db(dbname);
  var whereStr = { title: "111" }; // 查询条件
  dbo.collection(collection).deleteOne(whereStr, function (err, obj) {
    if (err) throw err;
    console.log("文档删除成功");
    db.close();
  });
});
