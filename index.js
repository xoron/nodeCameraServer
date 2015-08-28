var fs = require('fs');
var express = require('express');
var app = express();
var server = app.listen(3003);

var sys = require('sys')
var exec = require('child_process').exec;
var child;

app.use(express.static('.'));

app.get('/', function(request, response){
    response.sendFile('./index.html');
    response.end();
});

app.get('/image', function(request,response){
    child = exec("fswebcam image.jpg", function (error, stdout, stderr) {

        fs.readFile("./image.jpg", 'binary', function(err, original_data){
            // fs.writeFile('image_orig.jpg', original_data, 'binary', function(err) {});
            var base64Image = new Buffer(original_data, 'binary').toString('base64');
            // var decodedImage = new Buffer(base64Image, 'base64').toString('binary');
            // fs.writeFile('image_decoded.jpg', decodedImage, 'binary', function(err) {});

            response.send({image:"data:image/jpeg;base64,"+base64Image});
            response.end();
        });

    });

});
