const db = require('../database/connection')

module.exports = async (data) =>{
    return new Promise(
        async (resolve,reject)=>{

                await db.Task.destroy({
                    where:{
                        id:data.body.id,
                        UserId:data.user.id
                    }
                }).then((deletedRecord)=>{
                    if(deletedRecord === 1) resolve("ok")
                    else reject('task not found')
                }).
                catch((err)=>{
                    reject(err)
                })
        }
    )
}