const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	nickname: { type: DataTypes.STRING, unique:true, allowNull: false},
	email:{ type: DataTypes.STRING, unique:true, allowNull: false},
	password:{ type: DataTypes.STRING, allowNull: false},
	total_points:{ type: DataTypes.INTEGER, defaultValue: 0},
	photo:{ type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER", allowNull: false}
})
const EncryptedWords = sequelize.define('EncryptedWords', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    encrypted_word: {type: DataTypes.STRING, allowNull: false},
    help: {type: DataTypes.STRING},
    decrypted_word: {type: DataTypes.STRING, allowNull: false}
})
const Tasks = sequelize.define('tasks', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    task_text: {type: DataTypes.STRING, allowNull: false},
    additional_matherials: {type: DataTypes.STRING},
    solution: {type: DataTypes.STRING},
    answer: {type: DataTypes.STRING, allowNull: false},
    difficulty: {type: DataTypes.STRING, allowNull: false},
    classification: {type: DataTypes.STRING, allowNull: false},
    points: {type: DataTypes.INTEGER, allowNull: false}
})
const Crossword = sequelize.define('crossword', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    points: {type: DataTypes.INTEGER, allowNull: false}
})
const Theory = sequelize.define('theory', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    topic: {type: DataTypes.STRING, allowNull: false},
    material: {type: DataTypes.STRING, allowNull: false},
    useful_links: {type: DataTypes.STRING}
})
const Statistics = sequelize.define('statistics', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const Chat = sequelize.define('chat', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    message: {type: DataTypes.STRING, allowNull: false},
    time: {type: DataTypes.DATE, allowNull: false}
})
const UserTasks = sequelize.define('user_tasks', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const UserCrossword = sequelize.define('user_crossword', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasMany(Chat)
Chat.belongsTo(User)

User.hasOne(Statistics)
Statistics.belongsTo(User)

User.belongsToMany(Tasks, {through: UserTasks})
Tasks.belongsToMany(User, {through: UserTasks})

User.belongsToMany(Crossword, {through: UserCrossword})
Crossword.belongsToMany(User, {through: UserCrossword})

Theory.hasMany(Tasks)
Tasks.belongsTo(Theory)

Theory.hasMany(EncryptedWords)
EncryptedWords.belongsTo(Theory)

Crossword.hasMany(EncryptedWords)
EncryptedWords.belongsTo(Crossword)

module.exports = {
    User, EncryptedWords, Crossword, Tasks, Theory, Statistics, Chat, UserTasks, UserCrossword
}