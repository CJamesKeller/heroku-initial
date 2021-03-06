var express = require("express");
var app = express();
var path = require("path");

//sets port automatically to whatever heroku sets it as
app.set("port", (process.env.PORT || 5000));

app.use(express.static("./server/public/"));

app.get("/", function(req, res)
{
  res.sendFile(path.resolve("./server/public/views/index.html"));
});

app.listen(app.get("port"), function()
{
  console.log("listening on port: " + app.get("port"));
});
