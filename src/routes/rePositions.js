const router = require('express').Router()
const verifyCompany = require('./verifyCompanyToken')
const GetRePositions = require('../functions/GetRePositions')
const AddRePosition = require('../checkFunctions/CheckAddRePosition')
const RemoveRePositions = require('../checkFunctions/CheckRemoveRePosition')

router.get('/getAllRePositions',verifyCompany,async(req,res)=>{
    GetRePositions(req).then(
        result=> res.status(200).send({res:result}),
        error=> res.status(400).send({err:error})
    )
})

router.post('/AddRePosition',verifyCompany,async(req,res)=>{
    AddRePosition(req).then(
        result=> res.status(200).send({res:result}),
        error=> res.status(400).send({err:error})
    )
})

router.post('/RemoveRePosition',verifyCompany,async(req,res)=>{
    RemoveRePositions(req).then(
        result=> res.status(200).send({res:result}),
        error=> res.status(400).send({err:error})
    )
})

module.exports = router