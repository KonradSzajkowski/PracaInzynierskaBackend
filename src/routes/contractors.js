const router = require('express').Router()
const verifyCompany = require('./verifyCompanyToken')
const AddContractor = require('../functions/AddContractor')
const GetContractors = require('../functions/GetContractors')
const EditContractor = require('../checkFunctions/CheckEditContractor')
const RemoveContractor = require('../checkFunctions/CheckRemoveContractor')

router.post('/AddContractor',verifyCompany,async(req,res)=>{
    AddContractor(req).then(
        result=> res.status(200).send({res:result}),
        error=> res.status(400).send({err:error})
    )
})

router.get('/getAllContractors',verifyCompany,async(req,res)=>{
    GetContractors(req).then(
        result=> res.status(200).send({res:result}),
        error=> res.status(400).send({err:error})
    )
})

router.post('/EditContractor',verifyCompany,async(req,res)=>{
    EditContractor(req).then(
        result=> res.status(200).send({res:result}),
        error=> res.status(400).send({err:error})
    )
})

router.post('/RemoveContractor',verifyCompany,async(req,res)=>{
    RemoveContractor(req).then(
        result=> res.status(200).send({res:result}),
        error=> res.status(400).send({err:error})
    )
})

module.exports = router