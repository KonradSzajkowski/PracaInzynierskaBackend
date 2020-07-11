'use strict'


module.exports = (sequelize,Sequelize ) => {
        return sequelize.define("User" ,{
        id:{
            type:Sequelize.UUID(),
            allowNull:false,
            defaultValue: Sequelize.UUIDV4(),
            primaryKey: true,
        },
        login:{
            type:Sequelize.STRING(35),
            allowNull:false
        },
        password:{
            type:Sequelize.STRING(),
            allowNull:false
        },
        name:{
            type:Sequelize.STRING(50),
            allowNull:false
        },
        surname:{
            type:Sequelize.STRING(50),
            allowNull:false
        }
    },
    {
        timestamps:false,
        tableName:"Users"
    })
}