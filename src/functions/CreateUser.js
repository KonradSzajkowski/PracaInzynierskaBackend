const db =require('../database/connection')
const bcrypt = require("bcrypt")

module.exports = async (data ) => {
    return new Promise( 
        async (resolve, reject) =>{
            //checkin is user already exist 
            try{
                const loginExist = await db.User.findOne({
                    where:{ login: data.login}
                })


                if (loginExist) reject( 'User already exist' )
                else{
                //Hash password
                    const salt = await bcrypt.genSalt(10)
                    const hashedPassword = await bcrypt.hash(data.password,salt)

                    user = await db.User.create({
                        login: data.login,
                        password:hashedPassword , 
                        name: data.name,
                        surname: data.surname 
                    });

                    const res = await user.save();
                    if(res.error) reject ('data save error')
                    else resolve ('ok')
                }
            }
            catch(err) {
                reject(err)
                console.log(err)
            } 
        }
    )
}


