/*
 * @Author: Mr.pz
 * @Date: 2021-01-18 10:17:34
 * @Last Modified by: Mr.pz
 * @Last Modified time: 2021-01-18 13:39:19
 *
 * { type: 1 }  // 按 type 字段升序
 * { type: -1 } // 按 type 字段降序
 *
 */

const createConnect = require("./createConnect");

createConnect().then(({ db, dbo }) => {
  var mysort = { title: -1 };
  dbo
    .find()
    .sort(mysort)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
