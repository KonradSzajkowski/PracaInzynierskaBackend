const db= require('../database/connection')

module.exports= async(data)=>{
    return new Promise(
        async(resolve,reject)=>{
            await db.Invitation.findAll({
                where:{
                    UserId:data.user.id
                }
            }).then(
                async invitations=>{
                    let res = invitations.map(async invitation =>{
                        let id=''
                        let companyName=''

                        await db.Company.findOne({
                            where:{
                                id:invitation.CompanyId
                            }
                        }).then(
                            company=>{
                                    id=invitation.id,
                                    companyName=company.name
                            }
                        ).catch(err=>reject(err))
                        return{
                            id:id,
                            companyName:companyName
                        }
                    }) 
                        Promise.all(res).then(
                            res1=>{
                                resolve(res1)
                            }
                        )
                    }
            ).catch(err=>reject(err))
        }
    )
}