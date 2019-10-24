var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const port = process.env.PORT || 3000

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "4Ma2Gmbosb",
  password: "2kwRFvfiLm",
  database: "4Ma2Gmbosb"
});

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));

 // default route
 app.get('/select/player', function (req, res) {
     //return res.send({ error: true, message: 'hello' })
     con.connect(function(err) {
	  if (err) throw err;
	  con.query("SELECT * FROM player", function (err, result, fields) {
	    if (err) throw err;
	    return res.send({ error: false, data: result })
	  });
	});
 });

  app.get('/select/question', function (req, res) {
     //return res.send({ error: true, message: 'hello' })
     con.connect(function(err) {
	  if (err) throw err;
	  con.query("SELECT * FROM question", function (err, result, fields) {
	    if (err) throw err;
	    return res.send({ error: false, data: result })
	  });
	});
 });

 // set port
 app.listen(port, function () {
     console.log('Node app is running on port ' + port);
 });
 module.exports = app;