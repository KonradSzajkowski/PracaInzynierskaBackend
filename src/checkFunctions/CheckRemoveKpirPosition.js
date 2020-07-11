const RemoveKpirPosition = require('../functions/RemoveKpirPosition')
const IdValidation = require('../Valid/IdValidation')

module.exports = async(data)=>{
    return new Promise(
        async (resolve,reject)=>{
            const {error} = IdValidation(data.body)
            if(error) reject(error.details[0].message)
            else{
                await RemoveKpirPosition(data).then(
                    result=>resolve(result),
                    error => reject(error)
                )
            }
        }
    )
}