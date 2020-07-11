const db = require('../database/connection')

module.exports = async (data) => {
    return new Promise(
        async (resolve,reject) =>{
            try{
                let task = await db.Task.findOne({
                    where:{
                        UserId:data.user.id,
                        id:data.body.id
                    } 
                })
                if(task) {
                    task.name = data.body.name
                    await task.save()
                    resolve('ok')
                }
                else{
                    reject('task didnt found')
                }
            }
            catch(err){
                reject(err)
                console.log(err)
            }
        }
    )
}