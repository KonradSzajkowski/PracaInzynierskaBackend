const db = require('../database/connection')
const RemoveInvitation = require('./RemoveInvitation')

 module.exports= async(data)=>{
     return new Promise(
         async (resolve,reject)=>{
            await db.Invitation.findOne({
                where:{
                    id:data.body.id,
                    UserId:data.user.id
                }
            }).then(
                async invitation => {
                    await db.UserCompany.create({
                        UserId:invitation.UserId,
                        CompanyId:invitation.CompanyId
                    }).then(
                        async result => {
                            await result.save()
                            await RemoveInvitation(data).then(
                                res=> resolve(res)
                            ).catch(err=>reject(err))
                        }
                    ).catch(err => reject(err))
                }
            ).catch(err => reject(err))         
         }
     )
 }