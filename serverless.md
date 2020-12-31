### 开通函数计算和mongodb serverless 版本
[创建专有网络和交换机](https://help.aliyun.com/document_detail/151264.html?spm=5176.11065259.1996646101.searchclickresult.27873962tr8DyP) ---  这里不是很明白，但是跟着文档点。终于还是能用了

记得开放白名单和选择安全组，开放IP端口。 3717

### 本地navigate 链接
复制URI，修改下密码。自动输入

### 安装Funcraft工具
npm install @alicloud/fun -g
第一次需要执行 fun config
过程需要输入 id key和密码

### 
开发一个函数

```js
var getRawBody = require("raw-body");

/*
if you open the initializer feature, please implement the initializer function, as below:
module.exports.initializer = function(context, callback) {
    console.log('initializing');
    callback(null, '');
};
*/
var MongoClient = require("mongodb").MongoClient;
var url =
  "db地址.mongodb.rds.aliyuncs.com:3717/admin";

module.exports.handler = function (req, resp, context) {
  getRawBody(req, function (err, body) {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("runoob");
      dbo
        .collection("site")
        .find({})
        .toArray(function (err, result) {
          // 返回集合中所有数据
          if (err) throw err;

          console.log(result);
          db.close();
          resp.send(result);
        });
    });
  });
};

```
fun local invoke 支持本地运行事件函数，fun local start 支持本地运行 HTTP 触发器函数以及事件函数。

yarn 后执行 fun install   待验证

fun deploy 命令部署函数
