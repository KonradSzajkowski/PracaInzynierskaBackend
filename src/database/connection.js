const Sequelize = require("sequelize")
const dotenv = require('dotenv')

dotenv.config()
const sequelize = new Sequelize("ClientsData" , 'root' , process.env.DB_PASS ,
{host: '127.0.0.1' ,dialect: "mysql" , operatorsAliases: false })

sequelize
    .authenticate()
    .then(() =>{
        console.log('Conected witd db')
    })
    .catch(err =>{
        console.error('unable to contect db')
    })

sequelize
    .sync({
        logging:console.log,
        force: false
    })
    .then(() => {
        console.log('db connection setablished successfully')
    })
    .catch(err =>{
        console.error('unable to contect db')
    })

    const db = {}

    db.Sequelize = Sequelize
    db.sequelize = sequelize
    
    db.User = require('../models/User')(sequelize,Sequelize)
    db.Task = require('../models/Task')(sequelize,Sequelize)
    db.Company = require('../models/Company')(sequelize,Sequelize)
    db.UserCompany = require('../models/UserCompany')(sequelize,Sequelize)
    db.Invitation = require('../models/Invitation')(sequelize,Sequelize)
    db.Contractor = require('../models/Contractor')(sequelize,Sequelize)
    db.KpirPosition = require('../models/KpirPosition')(sequelize,Sequelize)
    db.RePosition = require('../models/RePosition')(sequelize,Sequelize)

    db.Task.belongsTo(db.User)
    db.User.hasMany(db.Task)

    db.User.belongsToMany(db.Company,{through:db.UserCompany})
    db.Company.belongsToMany(db.User,{through:db.UserCompany})
    db.UserCompany.belongsTo(db.User)
    db.UserCompany.belongsTo(db.Company)
    db.Company.hasMany(db.UserCompany)
    db.User.hasMany(db.UserCompany)

    db.Invitation.belongsTo(db.User)
    db.Invitation.belongsTo(db.Company)
    db.Company.hasMany(db.Invitation)
    db.User.hasMany(db.Invitation)

    db.Contractor.belongsTo(db.Company)
    db.Company.hasMany(db.Contractor)

    db.KpirPosition.belongsTo(db.Company)
    db.Company.hasMany(db.KpirPosition)

    db.RePosition.belongsTo(db.Company)
    db.Company.hasMany(db.RePosition)

    
module.exports = db
