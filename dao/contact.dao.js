const mongoose = require('mongoose');
const schema = require('../model/contact.model');

schema.statics = {
  create: function (data, cb) {
    const content = new this(data);
    content.save(cb);
  },
  listContacts: function () {
    // var userMap = {};

    // users.forEach(function(user) {
    //   userMap[user._id] = user;
    // });

    // res.send(userMap);  
  }
}

const model = mongoose.model('Contacts', schema);
module.exports = model;