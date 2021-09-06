const mongoose = require('../../database')

const CommentSchema = new mongoose.Schema({

    id_class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classe',
        require: true,
    },
    data_created: {
        type: Date,
        default: Date.now,
    },
    comment: {
        type: String,
        require: true,
    },
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment;
