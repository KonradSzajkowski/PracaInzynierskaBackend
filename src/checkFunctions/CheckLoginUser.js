const LoginValidation = require("../Valid/LoginValidation")
const VerifyUser = require("../functions/VerifyUser")

module.exports = async (data) => {
    return new Promise( 
       async (resolve, reject) => {
            const {error} = LoginValidation(data);
            if (error) reject(error.details[0].message);
            else{
                await VerifyUser(data).then(
                    result => resolve(result), 
                    error => reject(error) )
            }
        }
    )
}
