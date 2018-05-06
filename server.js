//requires the needed dependencies, sets up express app to use handlebars html templates
var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();
var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//sets up express app to use static files to be used in handlebars html templates
app.use(express.static(__dirname + "/public"));
app.use(express.static("."));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);

db.sequelize.sync({}).then(function() {
	app.listen(PORT, function() {
		console.log("Server listening on: http://localhost:" + PORT);
	});
});

//Why did I have to instal mysql2 module???????????