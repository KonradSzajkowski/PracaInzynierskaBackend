const AddCompany = require('../functions/AddCompany')
const CompanyValid = require('../Valid/CompanyValid')

module.exports = async(data) => {
    return new Promise(
        async (resolve,reject)=>{
            const {error} =CompanyValid(data.body)
            if(error) reject(error.details[0].message)
            else{
                await AddCompany(data).then(
                    result => resolve(result),
                    error => reject(error)
                )
            }
        }
    )
}