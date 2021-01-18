/*
 * @Author: Mr.pz
 * @Date: 2021-01-18 09:28:10
 * @Last Modified by: Mr.pz
 * @Last Modified time: 2021-01-18 09:32:30
 * 创建数据库，如果不存在，将创建数据库，并建立连接
 */

const { url } = require("./serverAddress");
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  db.close();
});
