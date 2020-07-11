const db = require('../database/connection')

module.exports = async(data)=>{
    return new Promise (
        
        async(resolve,reject)=>{
            
            await db.RePosition.create({
                salesDate:data.body.salesDate,
                documentDate:data.body.documentDate,
                document:data.body.document,    
                tax20:data.body.tax20,
                tax17:data.body.tax17,
                tax8_5:data.body.tax8_5,
                tax5_5:data.body.tax5_5,
                tax3:data.body.tax3,
                tax10:data.body.tax10,
                comments:data.body.comments,
                CompanyId:data.company.id
            }).then(
                async rePosition=>{
                    await rePosition.save()
                    resolve(rePosition.id)
                }
            ).catch(err=>reject(err))
        }
    )
}