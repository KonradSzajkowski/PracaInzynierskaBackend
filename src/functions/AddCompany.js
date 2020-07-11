const db = require('../database/connection') 

module.exports = async (data) => {
    return new Promise(
        async (resolve,reject) => {

                console.log(data.body)
                
                    await db.Company.create({
                    name:data.body.name,
                    post:data.body.post,
                    postName:data.body.postName,
                    adres:data.body.adres,
                    nip:data.body.nip,
                    kpir:data.body.kpir
                }).then(
                    async result =>{
                        await result.save()
                        await db.UserCompany.create({
                            UserId:data.user.id,
                            CompanyId:result.id
                        }).then(
                            async res => {
                                await res.save()  
                                resolve(result.id)
                            }
                        ).
                        catch((err) => reject(err))
                        
                    }
                ).
                catch((err) => reject(err))     
        }
    )
} 
