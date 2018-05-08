var db = require("../models");

module.exports = function(app) {

	//sequelize/express function gets all the information and renders it on homepage
	app.get("/", function(req, res) {
		db.book.findAll({}).then(function(result) {
			var hbsObject = {
				book: result
			}
			res.render("index", hbsObject);
		}).catch(function (err) {
			res.status(500).send(err);
		});
	});
	//sequelize/express function for adding a book to the database
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
	//sequelize/express function for updating whether a book has been read
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
	//sequelize/express function for updating the reader of a book
	app.put("/update-reader/:id", function (req, res) {
		db.book.update({
			reader: req.body.reader
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
	//sequelize/express function for deleting a book from the model
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