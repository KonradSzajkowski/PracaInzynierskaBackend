const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')

dotenv.config()
module.exports = function (req , res, next){
    const token = req.header('token')
    if(!token) return res.status(401).send({err:'access Denied'})

    try{
        const verified = jwt.verify(token, process.env.SECRET_TOKEN)
        req.user = verified
        next()
    }
    catch (err){
        res.status(400).send({err:'invalid Token'})
    }
}
