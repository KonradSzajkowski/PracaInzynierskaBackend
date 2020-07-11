const jwt = require('jsonwebtoken')
const db = require('../database/connection')

module.exports = async (data) => {
    return new Promise(
        async (resolve , reject) => {
            try{
                const tasks = await db.Task.findAll({
                    where:{ UserId : data.user.id },
                })

                res = tasks.map(task => {
                        return Object.assign(
                            {
                                id:task.id,
                                name:task.name,
                                selected:task.selected
                            }
                        )
                    })
                resolve(res)
            }
            catch(err){
                reject (err)
                console.log(err)
            }
        }
    )
}