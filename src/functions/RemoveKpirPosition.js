const db = require('../database/connection')

module.exports = async (data) =>{
    return new Promise(
        async (resolve,reject)=>{

                await db.KpirPosition.destroy({
                    where:{
                        id:data.body.id,
                        CompanyId:data.company.id
                    }
                }).then((deletedRecord)=>{
                    if(deletedRecord === 1) resolve("ok")
                    else reject('contractor not found')
                }).
                catch((err)=>{
                    reject(err)
                })
        }
    )
}