const { Theory } = require("../models/models")

class TheoryController {
    async create(req, res) {
        try {
            const {topic, material, useful_links} = req.body

            const theory = await Theory.create({topic, material, useful_links})
            return res.json(theory)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
    async getAll(req, res) {
        const theory = await Theory.findAll()
        return res.json(theory)
    }
    async getOne(req, res) {
        const {id} = req.params
        const theory = await Theory.findOne(
            {
                where: {id}
            },
        )
        return res.json(theory)
    }
}

module.exports = new TheoryController()