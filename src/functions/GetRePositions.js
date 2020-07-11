const db = require('../database/connection')

module.exports = async(data)=>{
    return new Promise(
        async (resolve,reject)=>{
            await db.RePosition.findAll({
                where:{
                    CompanyId:data.company.id
                }
            }).then(
                rePositions=>{
                    if(rePositions){
                        resolve(rePositions)
                    }
                }
            ).catch(err=>reject(err))
        }
    )
} 