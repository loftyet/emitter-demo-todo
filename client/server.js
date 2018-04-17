var express = require('express');
var path = require('path');

app = express();
app.use(express.static(__dirname + '/'))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
var port = process.env.PORT || 8080;
app.listen(port);
console.log('server started '+ port);