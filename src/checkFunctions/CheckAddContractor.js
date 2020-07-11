const BasicCompanyValid = require('../Valid/BasicCompanyValid')
const AddContractor = require('../functions/AddContractor')

module.exports = async(data)=>{
    async(resolve,reject)=>{
        const {error} = BasicCompanyValid(data.body)
        if(error) reject(error.details[0].message)
        else{
            await AddContractor(data).then(
                result=>resolve(result),
                err=>reject(err)
            )
        }
    }
}