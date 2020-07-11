const router = require('express').Router()
const verify = require('./verifyToken')
const verifyCompany = require('./verifyCompanyToken')
const GetCompanys = require('../functions/GetCompanys')
const AddCompany = require('../checkFunctions/CheckAddCompany')
const LoginCompany = require('../checkFunctions/CheckLoginCompany')
const GetCompany = require('../functions/GetCompany')
const EditCompany = require('../checkFunctions/CheckEditCompany')

router.get('/getAllCompanys',verify, async (req,res) => {
    await GetCompanys(req).then(
        result => res.status(200).send({res:result}),
        error => res.status(400).send({err:error})
    )
})

router.post('/AddCompany',verify,async (req,res)=>{
    await AddCompany(req).then(
        result => res.status(200).send({res:result}),
        error => res.status(400).send({err:error})
    )
})

router.post('/LoginCompany',verify,async(req,res)=>{
    await LoginCompany(req).then(
        result => res.status(200).send({res:result}),
        error => res.status(400).send({err:error})
    )
})

router.get('/getCompany',verifyCompany,async(req,res)=>{
    await GetCompany(req).then(
        result => res.status(200).send({res:result}),
        error => res.status(400).send({err:error})
    )
})

router.post('/EditCompany',verifyCompany,async(req,res)=>{
    await EditCompany(req).then(
        result => res.status(200).send({res:result}),
        error => res.status(400).send({err:error})
    ) 
})

module.exports = router