const express = require('express')
const router = express.Router()
const UserModel = require('../models/user')
const passport = require('passport')
const requireToken = passport.authenticate('bearer', {session:false})
const customError = require('../../lib/custom_errors')
const handle404 = customError.handle404
const requireOwnership = customError.requireOwnership // to display specific item that belongs to a specific person


// index all users
router.get('/users', requireToken, (req, res, next) => { // the next middleware plz
    UserModel.find() // fetching all users
    .then( users => {
        res.status(200).json({users: users})
    })
    .catch(next)
})


// show single user
router.get('/users/:id', requireToken, (req, res, next) => {
    const userId = req.params.id
    UserModel.findById(userId)
    .then( user => {
        res.status(200).json({user})
    })
    .catch(next) //goes to next middleqare in server.js
})

// update a user
router.put('/users/:id', requireToken, (req, res, next) => {
    const userId = req.params.id
    const userUpdates = req.body.user
    UserModel.findById(userId)
    .then( user => {
        return user.update(userUpdates)
    })
    .then( () => res.sendStatus(204) )
    .catch(next)
})


// delete a user
router.delete('/users/:id', requireToken, (req, res, next) => {
    const userId = req.params.id
    UserModel.findById(userId)
    .then( user => {
        return user.remove()
    })
    .then( () => res.sendStatus(204) )
    .catch(next)
})

module.exports = router