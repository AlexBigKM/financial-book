const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
})

const Row = sequelize.define('row', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    createdAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')},
    // updatedAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('NOW()')},
    type: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    number: {type: DataTypes.INTEGER, defaultValue: 0}
})

User.hasMany(Row)
Row.belongsTo(User)

module.exports = {User, Row}