var getRawBody = require("raw-body");

module.exports.handler = function (req, resp, context) {
  getRawBody(req, function (err, body) {
    resp.setHeader("content-type", "text/plain");

    for (var key in req.queries) {
      var value = req.queries[key];
      resp.setHeader(key, value);
    }
    params.body = body.toString();
    resp.send(JSON.stringify(params, null, "    "));
  });
};
