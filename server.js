// File Metadata Microservice

var express = require('express');
var multer = require('multer');

var app = express();
var upload = multer().single('uploaded-file');

var port = process.env.PORT || 8080;


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
  
});

app.post('/filesize', function(req, res) {
    upload(req, res, function(err) {
        if (err) throw err;
        var fileSize = req.file.size;
        console.log(fileSize);
        res.send( {filesize: fileSize} );
    });
    
});

app.listen(port, function () {
  console.log('App is running on port ' + port);
});

