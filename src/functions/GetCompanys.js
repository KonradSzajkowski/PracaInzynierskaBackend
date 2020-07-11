const db = require('../database/connection')

module.exports = async (data) =>{
    return new Promise (
        async(resolve,reject) => {
            await db.User.findOne({
                where:{
                    id:data.user.id
                },
                include:db.Company
            }).then(
                result => {
                    if(result) {
                        resolve(result.Companies)
                    }
                    else reject('companys didnt found')
                }
            ).catch(
                err => reject(err)
            )
        }
    )
}