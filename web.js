var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on " + port);
});