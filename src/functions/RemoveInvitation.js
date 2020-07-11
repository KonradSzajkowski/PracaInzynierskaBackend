const db = require('../database/connection')

module.exports = async(data)=>{
    return new Promise(
        async(resolve,reject)=>{

            await db.Invitation.destroy({
                where:{
                    id:data.body.id,
                    UserId:data.user.id
                }
            }).then(async (deletedRecord) =>{
                    if(deletedRecord === 1) resolve("ok")
                    else{
                        await db.User.findOne({
                            where:{
                                id:data.user.id
                            },
                            include:db.Company
                        }).then(
                            async user=>{
                                let coms =user.Companies.map(item => item.id)
                                await db.Invitation.destroy({
                                    where:{
                                        id:data.body.id,
                                        CompanyId:coms
                                    }
                                }).then(
                                    (deleted)=>{
                                        if(deleted===1) resolve("ok")
                                        else reject("user has no acces to this invitation")
                                    }
                                ).catch(err=>reject(err))  
                            }
                        ).catch(err=>reject(err))
                    }
                }
            ).catch(err=>reject(err))
        }
    )
}