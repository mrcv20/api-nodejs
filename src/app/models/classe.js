const mongoose = require('../../database')

const ClasseSchema = new mongoose.Schema({

    name: {
        type:String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },

    video: {
        type: String,
        require: true,
    },

    data_init: {
        type: Date,
        default: Date.now,
    },
    data_end: {
        type: Date,
        default: Date.now,
    },

    data_created: {
        type: Date,
        default: Date.now,
    },

    data_updated: {
        type: Date,
        default: Date.now,
    },
    total_comments: [{
        type: Number,
        require: false,
    }],
})

const Classe = mongoose.model('Classe', ClasseSchema)

module.exports = Classe;
