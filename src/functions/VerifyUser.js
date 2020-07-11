db = require('../database/connection')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config()

module.exports = async (data) => {
    return new Promise( 
        async (resolve, reject) =>{       
            //checkin is user already exist 
            try{
                const user = await db.User.findOne({
                    where:{ login: data.login}
                })
                if (!user) reject( 'Invalid login or password' )
                else{
                    const validPass = await bcrypt.compare(data.password , user.password )
                    if(!validPass) reject( 'Invalid login or password' )
                    //else resolve ("loged IN");
                    const token = jwt.sign({id: user.id}, process.env.SECRET_TOKEN )
                    resolve (token)
                }
            }
            catch(err) {
                reject(err)
                console.log(err)
            }     
        }         
    )
}


