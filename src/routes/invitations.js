const router = require('express').Router()
const verify = require('./verifyToken')
const AddInvitation = require('../checkFunctions/CheckAddInvitation')
const GetSentInvitations = require('../functions/GetSentInvitations')
const GetInvitations = require('../functions/GetInvitations')
const RemoveInvitation = require('../checkFunctions/CheckRemoveInvitation')
const AcceptInvitation = require('../checkFunctions/CheckAcceptInvitation')

router.post('/addInvitation',verify,async (req,res)=>{
    await AddInvitation(req).then(
        result => res.status(200).send({res:result}),
        error => res.status(400).send({err:error})
    )
})

router.get('/getSentInvitations',verify,async (req,res)=>{
    await GetSentInvitations(req).then(
        result => res.status(200).send({res:result}),
        error => res.status(400).send({err:error})
    )
})

router.get('/getInvitations',verify,async(req,res)=>{
    await GetInvitations(req).then(
        result => res.status(200).send({res:result}),
        error => res.status(400).send({err:error})
    )
})

router.post('/removeInvitation',verify,async(req,res)=>{
    await RemoveInvitation(req).then(
        result => res.status(200).send({res:result}),
        error => res.status(400).send({err:error})
    )
})

router.post('/acceptInvitation',verify,async(req,res)=>{
    await AcceptInvitation(req).then(
        result => res.status(200).send({res:result}),
        error => res.status(400).send({err:error})
    )
})

module.exports=router