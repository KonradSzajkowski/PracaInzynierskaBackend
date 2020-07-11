const db = require('../database/connection')

module.exports = async(data)=>{
    return new Promise(
        async(resolve,reject)=>{
            console.log('xd')
            db.Contractor.findOne({
                where:{
                    id:data.body.id,
                    CompanyId:data.company.id
                }
            }).then(
                async contractor =>{
                    console.log('xd')

                    if(contractor){
                        contractor.name=data.body.name
                        contractor.post=data.body.post
                        contractor.postName=data.body.postName
                        contractor.adres=data.body.adres
                        contractor.nip=data.body.nip
                        await contractor.save()
                        resolve('ok')
                    }
                    else reject('contractor not exist')
                }
            ).catch(err=>reject(err))
        }
    )
}