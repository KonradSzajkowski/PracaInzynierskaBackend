const EditCompany = require('../functions/EditCompany')
const BasicCompanyValid = require('../Valid/BasicCompanyValid')

module.exports = async(data)=>{
    return new Promise(
        async (resolve,reject)=>{
            const {error} = BasicCompanyValid(data.body)
            if(error) reject(error.details[0].message)
            EditCompany(data).then(
                result=>resolve(result),
                err=>reject(err)
            )
        }
    )
}