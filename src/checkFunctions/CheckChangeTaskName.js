const ChangeTaskNameValid = require('../Valid/ChangeTaskNameValid')
const ChangeTaskName = require('../functions/ChangeTaskName')

module.exports = async (data) => {
    return new Promise(
        async (resolve,reject) => {
           const {error}= ChangeTaskNameValid(data.body)
           if(error) reject(error.details[0].message)
           else{
               await ChangeTaskName(data).then(
                   result => resolve(result),
                   error => reject(error)
               )
           }
        }
    )
}