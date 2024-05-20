const uuid = require('uuid')
const path = require('path')
const {Tasks} = require('../models/models')
const ApiError = require('../error/ApiError')

class TestController {
    async create(req, res, next) {
        try {
            const {title, task_text, solution, answer, difficulty, classification, points} = req.body
            //const {additional_matherials} = req.files
            //let fileName = uuid.v4() +"."
            //additional_matherials.mv(path.resolve(__dirname, '..', 'static', fileName))      , additional_matherials: fileName

            const task = await Tasks.create({title, task_text, solution, answer, difficulty, classification, points})
            return res.json(task)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
    async getAll(req, res) {
        let limit = limit || 9
        page = page || 1
        offset = page * limit - limit
        const task = await Tasks.findAndCountAll({limit, offset})
        return res.json(task)
    }
    async getOne(req, res) {
        const {id} = req.params
        const task = await Tasks.findOne(
            {
                where: {id}
            },
        )
        return res.json(task)
    }
}

module.exports = new TestController()