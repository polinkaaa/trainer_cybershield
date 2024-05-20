const {Chat} = require('../models/models')
class ChatController {
    async create(req, res) {

    }
    async getAll(req, res) {
        const chat = await Chat.findAll()
        return res.json(chat)
    }
}

module.exports = new ChatController()