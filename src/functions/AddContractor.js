const db = require('../database/connection')

module.exports = async(data)=>{
    return new Promise (
        async(resolve,reject)=>{
            await db.Contractor.create({
                name:data.body.name,
                post:data.body.post,
                postName:data.body.postName,
                adres:data.body.adres,
                nip:data.body.nip,
                CompanyId:data.company.id
            }).then(
                async contractor=>{
                    await contractor.save()
                    resolve(contractor.id)
                }
            ).catch(err=>reject(err))
        }
    )
}