const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')
const db = require('../database/connection')
dotEnv.config()

module.exports = (req,res,next)=>{
    const token = req.header('token')
    if(!token) return res.status(401).send({err:'access Denied'})
    const companyToken= req.header('companyToken')
    if(!companyToken) res.status(401).send({err:'accesDenied'})

    try{
        const verified = jwt.verify(token, process.env.SECRET_TOKEN)
        const companyVerified = jwt.verify(companyToken,process.env.COMPANY_SECRET_TOKEN)
        
        db.UserCompany.findOne({
            where:{
                UserId:verified.id,
                CompanyId:companyVerified.id
            }
        }).then(
            
            result=>{
                if(result){
                    req.user=verified
                    req.company=companyVerified
                    next()
                }
                else{
                    res.status(400).send({err:'user not belong to this company'})
                }
            }
        )
    }
    catch (err){
        res.status(400).send({err:'invalid Token'})
    }
}
