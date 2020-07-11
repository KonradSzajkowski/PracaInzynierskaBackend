Registervalidation = require("../Valid/RegisterValidation")
CreateUser = require("../functions/CreateUser")

module.exports = async (data) => {

    return new Promise( 
       async (resolve, reject) => {
            const {error} = Registervalidation(data)
            if (error) reject(error.details[0].message) 
            else{
                await CreateUser(data).then(
                    result => resolve(result), 
                    error => reject(error) 
                )
            }
        }            
    )
}
