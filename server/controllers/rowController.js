const {Row} = require('../models/models')
const ApiError = require('../error/ApiError')

class RowController {
    async create (req, res, next) {
        const {name, type, description, number} = req.body
        try {
            const type = await Row.create({name, type, description, number})
            return  res.json(type)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll (req, res) {
        const rows = await Row.findAll()
        return res.json(rows)
    }

    async getOne (req, res) {

    }
}

module.exports = new RowController()