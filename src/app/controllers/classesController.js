const express = require('express')
const authMiddleware = require('../middlewares/auth')

const Classe = require('../models/classe')
const Comment = require('../models/comment')
const router = express.Router()

router.use(authMiddleware)

// COMMENTS ROUTE //
router.get('/comments', async (req, res) => {
    try {

        const comments = await Comment.find().populate('id_class')

        return res.send({ comments })
        
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: "Error loading comments"})
    }

})

router.post('/comments', async (req, res) => {
    try {
        const comment = await Comment.create(req.body)

        return res.send({ comment })

    } catch(err){
        return res.status(400).send({ error: "Error creating new comment "})
    }
})

router.delete('/comments/:commentId', async (req, res) => {
    try {
        await Classe.findByIdAndRemove(req.params.commentId)
    
        return res.send({ msg: "deleted comment " })
    } catch (err) {
        return res.status(400).send({ error: "error loading classe"})
    }
})

// CLASSES ROUTE //
router.get('/', async (req, res) => {
    try {
        const classes = await Classe.find()

        return res.send({ classes })

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: "Error loading classes"})
    }

})

router.get('/:classeId', async (req, res ) => {
    try {
        const classe = await Classe.findById(req.params.classeId)
    
        return res.send({ classe, comments: "oi" })
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: "error loading classe"})
    }

})

router.post('/', async (req, res) => {
    try {
        const {name, description, video, comments} = req.body

        const classe = await Classe.create({name, description, video})

        return res.send({ classe })

    } catch(err){
        return res.status(400).send({ error: "Error creating new classe"})
    }
})

router.put('/:classeId', async (req, res) => {

})

router.delete('/:classeId', async (req, res) => {
    try {
        await Classe.findByIdAndRemove(req.params.classeId)
    
        return res.send({ msg: "deleted" })
    } catch (err) {
        return res.status(400).send({ error: "error loading classe"})
    }
})


module.exports = app => app.use('/classes', router)
