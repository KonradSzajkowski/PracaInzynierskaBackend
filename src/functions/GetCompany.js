const db = require('../database/connection')

module.exports = async(data)=>{
    return new Promise(
        async (resolve,reject)=>{
            await db.Company.findOne({
                where:{
                    id:data.company.id
                }
            }).then(
                result=>{
                    if(result) resolve(result)
                    else reject('this user not exist')
                }
            ).catch(err=>reject(err))
        }
    )
}
