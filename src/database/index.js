const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/nodeapirest')
mongoose.Promise = global.Promise

module.exports = mongoose