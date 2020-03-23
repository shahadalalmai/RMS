

const express = require('express')
const router = express.Router()
const ReportModel = require('../models/report')

// import passport
const passport = require('passport') // similar to the concept of jwt
// Use authentication
const requireToken = passport.authenticate('bearer', {session:false})
//we use already made error handling by the template
const customError = require('../../lib/custom_errors')
const handle404 = customError.handle404
const requireOwnership = customError.requireOwnership // to display specific item that belongs to a specific person

// index all reports
router.get('/reports', requireToken, (req, res, next) => { // the next middleware plz
    const userId = req.user._id
    ReportModel.find({"owner": userId}) // fetching resource according to its owner
    .then( reports => {
        res.status(200).json({reports: reports})
    })
    .catch(next)
})

// index all reports
router.get('/all-reports', requireToken, (req, res, next) => { // the next middleware plz
    const admin = req.user.admin
    if (admin)
    ReportModel.find() // fetching all resource for admin user
    .then( reports => {
        res.status(200).json({reports: reports})
    })
    .catch(next)
})


// show single report
router.get('/reports/:id', requireToken, (req, res, next) => {
    const reportId = req.params.id
    ReportModel.findById(reportId)
    .then( report => {
        requireOwnership(req, report)
        res.status(200).json({report})
    })
    .catch(next) //goes to next middleqare in server.js
})


// create report
router.post('/report/new', requireToken, (req, res, next) => {
    const userId = req.user._id
    const newReport = req.body.report
    newReport.owner = userId// specifying the owner of the report
    // console.log(newReport)
    ReportModel.create(newReport)
    .then( report => {
        res.status(201).json({report: report})
    } )
    .catch(next)
})


// update report
router.put('/reports/:id', requireToken, (req, res, next) => {
    const reportId = req.params.id
    const reportUpdates = req.body.report
    ReportModel.findById(reportId)
    .then( report => {
        requireOwnership(req, report) // verify the owner of the report resource before update action
        return report.update(reportUpdates)
    })
    .then( () => res.sendStatus(204) )
    .catch(next)
})


// delete report
router.delete('/reports/:id', requireToken, (req, res, next) => {
    const reportId = req.params.id
    ReportModel.findById(reportId)
    .then( report => {
        requireOwnership(req, report) // verify the owner of the report resource before destroy action
        return report.remove()
    })
    .then( () => res.sendStatus(204) )
    .catch(next)
})

module.exports = router