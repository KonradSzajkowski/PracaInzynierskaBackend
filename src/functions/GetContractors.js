const db = require('../database/connection')

module.exports = async(data)=>{
    return new Promise(
        async (resolve,reject)=>{
            await db.Contractor.findAll({
                where:{
                    CompanyId:data.company.id
                }
            }).then(
                contractors=>{
                    if(contractors){
                        resolve(contractors)
                    }
                }
            ).catch(err=>reject(err))
        }
    )
}