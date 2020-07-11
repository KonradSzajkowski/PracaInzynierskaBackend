const IdValidation = require('../Valid/IdValidation')
const ChangeTaskCheckBox = require('../functions/ChangeTaskCheckBox')

module.exports = async (data) => {
    return new Promise(
        async (resolve,reject) => {
            const {error} = IdValidation(data.body)
            if(error) reject(error.details[0].message)
            else{
                await ChangeTaskCheckBox(data).then(
                    result => resolve(result),
                    error => reject(error)
                )
            }
        }
    )
}