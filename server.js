var express = require ('express');
var app = express ();

var fs = require('fs'); // підключено модуль для роботи із file після ряд.34
var bodyParser = require("body-parser");

app.use(express.static(__dirname)); // встановлення каталогу для статичного контенту - CSS

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (reg, res) {
	res.sendFile(__dirname+'/index.html');
} );

/*app.get('/list', function (reg, res) {
	res.sendFile(__dirname+'/list.html');
} );*/

app.get('/list', function (reg, res) {
	res.sendFile(__dirname+'/data.json');
} );

app.get('/form', function (reg, res) {
	res.sendFile(__dirname+'/form.html');
} );

// для form id="newform"
app.post('/postsend', function (reg, res) {
	console.log(reg.body);
	res.send(reg.body.myinput);
} );

app.listen(8080);
console.log('server is running');

/* app.get("/formget", function (reg, res) {
	console.log(reg.query); // дані записуються на сервері після оновлення
	//res.send("Test");

	var file = require ('./data.json');
	console.log(file);
	file.push(reg.query);
	var str = JSON.stringify(file);
	fs.writeFileSync('data.json', str);
	res.send('данi збережено на сервері');
} ); */

app.post('/formsendpost', function (reg, res) {
	console.log(reg.body); 
	//res.send("Test");

	var file = require ('./data.json');
	console.log(file);
	file.splice(id,1);
	var str = JSON.stringify(file);
	fs.writeFileSync('data.json', str);
	res.send(str);
} );

/*app.get("/myget", function (reg, res) {
	console.log(reg.query);
	res.send('success');
} );*/

app.post("/mypost", function (reg, res) {
	console.log(reg.body);
	res.send('success');
} );
