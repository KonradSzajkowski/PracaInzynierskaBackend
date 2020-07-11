'use strict'

module.exports = (sequelize,Sequelize) =>{
    return sequelize.define("Invitation" ,{
            id:{
                type:Sequelize.UUID(),
                defaultValue:Sequelize.UUIDV4(),
                allowNull:false,
                primaryKey:true
            }
        },
        {
            timestamps:false,
            tableName:"Invitations"
        }
    )
}