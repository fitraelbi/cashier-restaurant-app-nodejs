const model = require("../model/history")
const history = {}

history.all = async (req, res) => {
    try {
        const data = await model.GetAll()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

history.add = (req, res) => {
    const { invoices, cashier, orders, total } = req.body
    const data = model.Add( invoices, cashier,  orders, total )
    return res.send(data)
}

history.edit = (req, res) => {
    const { invoices, cashier,  orders, total } = req.body
    const data = model.Edit(invoices, cashier,  orders, total)
    return res.send(data)
}

history.delete = (req, res) => {
    const { invoices } = req.body
    const data = model.Delete(invoices)
    return res.send(data)
}

module.exports = history
