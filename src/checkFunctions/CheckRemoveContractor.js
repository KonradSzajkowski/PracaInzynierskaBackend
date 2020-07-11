const RemoveContractor = require('../functions/RemoveContractor')
const IdValidation = require('../Valid/IdValidation')

module.exports = async(data)=>{
    return new Promise(
        async (resolve,reject)=>{
            const {error} = IdValidation(data.body)
            if(error) reject(error.details[0].message)
            else{
                await RemoveContractor(data).then(
                    result=>resolve(result),
                    error => reject(error)
                )
            }
        }
    )
}