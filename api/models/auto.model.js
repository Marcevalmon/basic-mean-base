var mongoose = require('mongoose');

var autoModel = new mongoose.Schema({
    name: { type: String }
});

module.exports = mongoose.model('auto', autoModel);