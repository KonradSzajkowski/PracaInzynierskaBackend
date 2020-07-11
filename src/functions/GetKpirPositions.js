const db = require('../database/connection')

module.exports = async(data)=>{
    return new Promise(
        async (resolve,reject)=>{
            await db.KpirPosition.findAll({
                where:{
                    CompanyId:data.company.id
                }
            }).then(
                kpirPositions=>{
                    if(kpirPositions){
                        resolve(kpirPositions)
                    }
                }
            ).catch(err=>reject(err))
        }
    )
} 