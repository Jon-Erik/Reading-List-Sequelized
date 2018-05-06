var db = require("../models");

module.exports = function(app) {

	app.get("/", function(req, res) {
		db.book.findAll({}).then(function(result) {
			var hbsObject = {
				book: result
			}
			//console.log(hbsObject);
			res.render("index", hbsObject);
		}).catch(function (err) {
			res.status(500).send(err);
		});
	});

	app.post("/add", function(req, res) {
		db.book.create({
			title: req.body.title,
			author: req.body.author
		}).then(function(book) {
			res.send("book submitted to db");
		}).catch(function (err) {
			res.status(500).send(err);
		});
	});

	app.put("/update/:id", function (req, res) {
		db.book.update({
			finished: req.body.finished
		}, {
			where: {
				id: req.params.id
			}
		}).then(function(result) {
			res.json(result);
		}).catch(function(err) {
			res.status(500).send(err);
		})
	})

	app.delete("/delete/:id", function(req, res) {
		db.book.destroy({
			where: {
				id: req.params.id
			}
		}).then(function() {
			res.status(200).send();
		}).catch(function(err) {
			res.status(500).send(err);
		})
	})

};