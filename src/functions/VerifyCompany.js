const db = require('../database/connection')
const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')

dotEnv.config()

module.exports = async(data)=>{
    return new Promise(
        async(resolve,reject)=>{
            await db.UserCompany.findOne({
                where:{
                    UserId:data.user.id,
                    CompanyId:data.body.id
                }
            }).then(
                result=>{
                    if(result){
                        const companyToken=jwt.sign({id:data.body.id},process.env.COMPANY_SECRET_TOKEN)   
                        resolve(companyToken)
                    }else reject('user not belong to this company')
                }
            ).catch(err=>reject(err))
        }
    )
}