const EditContractor = require('../functions/EditContractor')
const EditContractorValid = require('../Valid/EditContractorValid')

module.exports=async(data)=>{
    return new Promise(
        async(resolve,reject)=>{
            const {error} = EditContractorValid(data.body)
            if(error) reject(error.details[0].message)
            else{
                EditContractor(data).then(
                    result=>resolve(result),
                    err=>reject(err)
                )
            }
        }
    )
}