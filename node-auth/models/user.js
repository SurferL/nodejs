var mongoose = require('mongoose');

/* Connect to database */
mongoose.connect('mongodb://localhost/nodeauth');

var db = mongoose.connection;

/* User schema */
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index: true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	},
	profileimage: {
		type: String
	}
});

/* Save user to database */
var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
	newUser.save(callback);
}
