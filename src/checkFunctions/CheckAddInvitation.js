const InvitationValid = require('../Valid/InvitationValid')
const AddInvitation = require('../functions/AddInvitation')
const db = require('../database/connection')
module.exports = async(data)=>{
    return new Promise(
        async (resolve,reject)=>{
            const {error} = InvitationValid(data.body)
            if(error) reject(error.details[0].message)
            else{
                await db.UserCompany.findOne({
                    where:{
                        UserId:data.user.id,
                        CompanyId:data.body.companyId
                    }
                }).then(
                   async  result=>{
                        if(result){
                            await AddInvitation(data).then(
                                res =>resolve(res),
                                err =>reject(err)
                            ).catch(err=>reject(err))
                        }
                        else {
                            console.log("xd")
                            reject('user not had acces to this company')
                       }
                    }
                ).catch(err=>reject(err))
            }
        }
    )
}