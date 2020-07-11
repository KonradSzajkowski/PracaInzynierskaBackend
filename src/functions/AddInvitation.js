const db =require('../database/connection')

module.exports = async(data)=>{
    return new Promise(
        async (resolve,reject)=>{

            await db.User.findOne({
                where:{
                    login:data.body.login
                }
            }).then(
                async result=>{
                    if(result)
                    {
                        await db.UserCompany.findOne({
                            where:{
                                UserId:result.id,
                                CompanyId:data.body.companyId
                            } 
                        }).then(
                            async userInCompany=>{
                                if(userInCompany) reject("user already is in company")
                                else{
                                    await db.Invitation.findOne({
                                        where:{
                                            UserId:result.id,
                                            CompanyId:data.body.companyId
                                        } 
                                    }).then(
                                        async invitation=>{
                                            if(invitation) reject("user already get invitation")
                                            else{
                                                await db.Invitation.create({
                                                    UserId:result.id,
                                                    CompanyId:data.body.companyId
                                                }).then(
                                                    res=>{
                                                        res.save()
                                                        resolve(res.id)
                                                    }
                                                ).catch(err=>reject(err))
                                            }
                                        }
                                    ).catch(err=>reject(err))
                                }
                            }
                        ).catch(err=>reject(err))
                    }
                    else reject("login not found")
                }
            ).catch(err=>reject(err))  
        }
    )
}








