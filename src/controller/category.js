const model = require("../model/category")
const category = {}

category.all = async (req, res) => {
    try {
        const data = await model.GetAll()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

category.add = (req, res) => {
    const { name } = req.body
    const data = model.Add(name)
    return res.send(data)
}

category.edit = (req, res) => {
    const { id, name } = req.body
    const data = model.Edit(id, name)
    return res.send(data)
}

category.delete = (req, res) => {
    const { id } = req.body
    const data = model.Delete(id)
    return res.send(data)
}

module.exports = category
