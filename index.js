var express = require("express");
var app = express();

var port = process.env.PORT || 3000; // Support CloudFoundry Port

app.get("/", function(req, res) {
  res.send("hello, I work!");
});

app.listen(port, function() {
  console.log("Example app listening on port " + port);
});
