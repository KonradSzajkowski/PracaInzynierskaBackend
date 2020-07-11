const db = require('../database/connection')

module.exports = async(data)=>{
    return new Promise(
        async(resolve,reject)=>{
            await db.Company.findOne({
                where:{
                    id:data.company.id
                }
            }).then(
                async company=>{
                    if(company){
                        company.name=data.body.name
                        company.post=data.body.post
                        company.postName=data.body.postName
                        company.adres=data.body.adres
                        company.nip=data.body.nip
                        await company.save()
                        resolve('ok')
                    }else(
                        reject("this company not exist")
                    )
                }
            ).catch(err=>reject(err))
        }
    )
}