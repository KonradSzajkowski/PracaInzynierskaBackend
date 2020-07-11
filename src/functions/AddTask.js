const db = require('../database/connection')

module.exports = async (data) =>{
    return new Promise(
        async (resolve,reject) => {
            try{
                const task = await db.Task.create({
                    name : data.body.name,
                    selected : false,
                    UserId : data.user.id
                })
                const res =await task.save()
                if(res.error) reject('data save error')
                else resolve(res.id)
            }
            catch(err){
                reject(err)
                console.log(err)
            }
        }
    )
}