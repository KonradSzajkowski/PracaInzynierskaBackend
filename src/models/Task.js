'use strict'

module.exports = (sequelize,Sequelize ) => {
        return sequelize.define("Task" ,{
        id:{
            type:Sequelize.UUID(),
            allowNull:false,
            defaultValue:Sequelize.UUIDV4(),
            primaryKey: true,
        },
        name:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
        selected:{
            type:Sequelize.BOOLEAN(),
            allowNull:false
        }
    },
    {
        timestamps:false,
        tableName:"Tasks"
    })
}