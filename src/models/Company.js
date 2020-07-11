'use strict'

module.exports = (sequelize,Sequelize) =>{
    return sequelize.define("Company" ,{
            id:{
                type:Sequelize.UUID(),
                allowNull:false,
                defaultValue:Sequelize.UUIDV4(),
                primaryKey:true
            },
            name:{
                type:Sequelize.STRING(50),
                allowNull:false
            },
            post:{
                type:Sequelize.STRING(6),
                allowNull:false
            },
            postName:{
                type:Sequelize.STRING(50),
                allowNull:false
            },
            adres:{
                type:Sequelize.STRING(50),
                allowNull:false
            },
            nip:{
                type:Sequelize.STRING(10),
                allowNull:false
            },
            kpir:{
                type:Sequelize.BOOLEAN(),
                allowNull:false
            }
        },
        {
            timestamps:false,
            tableName:"Companys"  
        }
    )
}
