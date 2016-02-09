var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  defaults: {
  },
  initialize: function() {
  	var self = this;
  	bcrypt.hash(self.get('password'), null, null, function(err, hash) {
  	self.set('password', hash);
});
  },
  // addNewUser: function(password) {
  // 	var shasum = crypto.createHash('sha1');
  //   shasum.update(model.get('password'));
  //   model.set('code', shasum.digest('hex').slice(0, 5));
  // }
});

module.exports = User;