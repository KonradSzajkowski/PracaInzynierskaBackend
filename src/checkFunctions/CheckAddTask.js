const AddTask = require('../functions/AddTask')
const TaskNameValidation = require('../Valid/TaskNameValidation')

module.exports = async (data) => {
    return new Promise(
        async (resolve,reject) => {
            const {error} = TaskNameValidation(data.body)
            if(error) reject (error.details[0].message)
            else{
                await AddTask(data).then(
                   result => resolve(result),
                   error => reject(error)
                )
            }
        }
    )
}