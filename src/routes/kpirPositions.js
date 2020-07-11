const router = require('express').Router()
const verifyCompany = require('./verifyCompanyToken')
const GetKpirPositions = require('../functions/GetKpirPositions')
const AddKpirPosition = require('../checkFunctions/CheckAddKpirPosition')
const RemoveKpirPositions = require('../checkFunctions/CheckRemoveKpirPosition')

router.get('/getAllKpirPositions',verifyCompany,async(req,res)=>{
    GetKpirPositions(req).then(
        result=> res.status(200).send({res:result}),
        error=> res.status(400).send({err:error})
    )
})

router.post('/AddKpirposition',verifyCompany,async(req,res)=>{
    AddKpirPosition(req).then(
        result=> res.status(200).send({res:result}),
        error=> res.status(400).send({err:error})
    )
})

router.post('/RemoveKpirPosition',verifyCompany,async(req,res)=>{
    RemoveKpirPositions(req).then(
        result=> res.status(200).send({res:result}),
        error=> res.status(400).send({err:error})
    )
})

module.exports = router