const express = require('express')
const router = express.Router()
const GroupModel = require('../models/group')
const passport = require('passport')
const requireToken = passport.authenticate('bearer', {session:false})
const customError = require('../../lib/custom_errors')
const handle404 = customError.handle404
const requireOwnership = customError.requireOwnership // to display specific item that belongs to a specific person


// index all groups
router.get('/groups', requireToken, (req, res, next) => { // the next middleware plz
    GroupModel.find() // fetching all groups
    .then( groups => {
        res.status(200).json({groups: groups})
    })
    .catch(next)
})


// show single group
router.get('/groups/:id', requireToken, (req, res, next) => {
    const groupId = req.params.id
    GroupModel.findById(groupId)
    .then( group => {
        res.status(200).json({group})
    })
    .catch(next) //goes to next middleqare in server.js
})


// create group
router.post('/group/new', requireToken, (req, res, next) => {
    // const userId = req.user._id
    const newGroup = req.body.group
    // newGroup.owner = userId// specifying the owner of the group
    // // console.log(newGroup)
    GroupModel.create(newGroup)
    .then( group => {
        res.status(201).json({group: group})
    } )
    .catch(next)
})


// update a group
router.put('/groups/:id', requireToken, (req, res, next) => {
    const groupId = req.params.id
    const groupUpdates = req.body.group
    GroupModel.findById(groupId)
    .then( group => {
        return group.update(groupUpdates)
    })
    .then( () => res.sendStatus(204) )
    .catch(next)
})


// delete a group
router.delete('/groups/:id', requireToken, (req, res, next) => {
    const groupId = req.params.id
    GroupModel.findById(groupId)
    .then( group => {
        return group.remove()
    })
    .then( () => res.sendStatus(204) )
    .catch(next)
})

module.exports = router