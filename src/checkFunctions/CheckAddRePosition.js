const AddRePosition = require('../functions/AddRePosition')
const AddRePositionValid = require('../Valid/AddRePositionValid')

module.exports = async (data) => {
    return new Promise(
        async (resolve,reject) => {
            const {error} = AddRePositionValid(data.body)
            if(error) reject (error.details[0].message)
            else{
                await AddRePosition(data).then(
                   result => resolve(result),
                   error => reject(error)
                )
            }
        }
    )
}
