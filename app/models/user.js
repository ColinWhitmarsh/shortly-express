var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function() {
    var self = this;
    bcrypt.hash(self.get('password'), null, null, function(err, hash) {
      self.set('password', hash);
    });
  }
});

module.exports = User;