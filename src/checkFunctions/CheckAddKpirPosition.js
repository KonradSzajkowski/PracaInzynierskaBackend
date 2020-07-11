const AddKpirPosition = require('../functions/AddKpirPosition')
const AddKpirPositionValid = require('../Valid/AddKpirPositionValid')

module.exports = async (data) => {
    return new Promise(
        async (resolve,reject) => {
            const {error} = AddKpirPositionValid(data.body)
            if(error) reject (error.details[0].message)
            else{
                await AddKpirPosition(data).then(
                   result => resolve(result),
                   error => reject(error)
                )
            }
        }
    )
}
