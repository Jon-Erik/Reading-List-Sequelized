module.exports = function(sequelize, DataTypes) {
	var books = sequelize.define("book", {
		title: {
			type: DataTypes.STRING,
	    	allowNull: false,
	    	validate: {
	    		len: [1, 140]
	    	}
		},
		author: {
			type: DataTypes.STRING,
	    	allowNull: false,
	    	validate: {
	    		len: [1, 140]
	    	}
		},
		finished: {
			type: DataTypes.BOOLEAN,
	    	defaultValue: false
		},
		reader: {
			type: DataTypes.STRING,
	    	allowNull: false,
	    	defaultValue: "Click to add a reader",
	    	validate: {
	    		len: [1, 140]
	    	}
		}
	});
	return books;
}