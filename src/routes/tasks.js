const router = require('express').Router()
const verify = require('./verifyToken')
const getTasks = require('../functions/GetTasks')
const AddTask = require('../checkFunctions/CheckAddTask')
const ChangeTaskName = require('../checkFunctions/CheckChangeTaskName')
const ChangeTaskCheckBox = require('../checkFunctions/CheckChangeTaskCheckBox')
const RemoveTask = require('../checkFunctions/CheckRemoveTask')

router.get('/getAllTasks',verify ,async (req,res) =>{
    await getTasks(req).then(
        result => res.status(200).send({tasks:result}),
        error => res.status(400).send({err:error})
    )
})

router.post('/addTask', verify,async (req,res) =>{
     await AddTask(req).then(
         result => res.status(200).send({id:result}),
         error => res.status(400).send({err:error})
     )
})

router.post('/changeTaskName',verify,async(req,res) => {
    await ChangeTaskName(req).then(
        result => res.status(200).send({res:result}),
        error => res.status(400).send({err:error})
    )
})

router.post('/changeTaskCheckBox',verify, async(req,res) =>{
    await ChangeTaskCheckBox(req).then(
        result => res.status(200).send({res:result}),
        error => res.status(400).send({err:error})
    )
})

router.post('/removeTask',verify,async (req,res) =>{
    await RemoveTask(req).then(
        result => res.status(200).send({res:result}),
        error => res.status(400).send({err:error})
    )
})

module.exports = router