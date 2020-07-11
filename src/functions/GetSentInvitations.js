const db =require('../database/connection')

module.exports = async(data)=>{
    return new Promise(
        async(resolve,reject)=>{
            await db.UserCompany.findAll({
                where:{
                    UserId:data.user.id
                }
            }).then(
                async companys=>{
                    let com = companys.map(item => item.CompanyId)
                    await db.Invitation.findAll({
                        where:{
                            CompanyId:com    
                        }
                    }).then(
                        async invitations=>{
                            let res =await invitations.map(async item=> {
                                let companyName=''
                                let login=''
                                
                                await db.Company.findOne({
                                    where:{
                                        id:item.CompanyId
                                    }
                                }).then(
                                    resCompany=>{
                                        companyName= resCompany.name
                                    }
                                ).catch(err=>reject(err))
                                await db.User.findOne({
                                    where:{
                                        id:item.UserId
                                    }
                                }).then(
                                    resUser=> {
                                        login = resUser.login
                                    }
                                ).catch(err=>reject(err))
                                return {
                                    id:item.id,
                                    companyName:companyName,
                                    login:login
                                }   
                            })
                            Promise.all(res).then(
                                res1=> {
                                    resolve(res1)
                                }
                            )

                            
                        }
                    ).catch(err => reject(err))
                }
            ).catch(err=>reject(err))
        }
    )
}