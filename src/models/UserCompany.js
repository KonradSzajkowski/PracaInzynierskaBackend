'use strict'

module.exports = (sequelize,Sequelize) =>{
    return sequelize.define("UserCompany" ,{
            id:{
                type:Sequelize.UUID(),
                defaultValue:Sequelize.UUIDV4(),
                allowNull:false,
                primaryKey:true
            }
        },
        {
            timestamps:false,
            tableName:"UsersCompanys"
        }
    )
}