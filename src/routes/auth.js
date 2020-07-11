const router = require('express').Router()
const RegisterUser = require('../checkFunctions/CheckRegisterUser')
const LoginUser = require("../checkFunctions/CheckLoginUser")

router.post('/register' , async (req,res) => {
    try{
        //console.log(req.body.login);
        await RegisterUser(req.body).then(
            result => res.status(200).send({res:result}),
            error => res.status(400).send({err: error})
        )
    }
    catch(err) {
        console.log(err)
    }
   
})

router.post('/login' , async (req,res) => {
    try{
        console.log(req.body);
        await LoginUser(req.body).then(
            result => res.header('auth-token', result).status(200).send({token:result}),
            error => res.status(400).send({err: error})
        )
    }
    catch(err) {
        console.log(err)
    }
})

module.exports = router