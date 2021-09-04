const { send } = require('express/lib/response')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization


    // verifying with conditiona is soft than process the token direct in the jwt
    if (!authHeader)
        return res.status(401).send({ error: 'no token provided'})

    const parts = authHeader.split(' ')

    if (!parts.length == 2 )
        return rest.status(401).send({ error: 'token error'})

    const [ scheme, token ] = parts

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'token not formatted'})

    // last veryfing
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'token not valid'})

        req.userId = decoded.id
        return next()
    })
}