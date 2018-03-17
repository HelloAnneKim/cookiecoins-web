var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

// setup routes
app.get('*', function(req,res) {
   res.sendFile(path.join(__dirname, 'public/index.html'));
});

// export app
module.exports = app;