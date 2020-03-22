const express = require('express')
const router = express.Router()

const GroupModel = require('../models/group')

// index all groups without authentication
router.get('/groups', (req, res) => {
    GroupModel.find({}) // fetching resource according to its owner
    .then( groups => {
        res.status(200).json({groups: groups})
    })
    .catch(error => console.log(error))
})

module.exports = router