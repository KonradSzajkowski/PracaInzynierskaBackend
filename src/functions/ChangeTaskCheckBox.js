const db =require('../database/connection')

module.exports = async (data) => {
    return new Promise(
        async(resolve,reject) =>{
            try{
                let task = await db.Task.findOne({
                    where:{
                        id:data.body.id,
                        Userid:data.user.id
                    }
                })
                if(task){
                    task.selected=!task.selected
                    await task.save()
                    resolve("ok")
                }
                else reject("task didnt found")
            }
            catch(err){
                console.log(err)
                reject(err)
            }
        }
    )
}