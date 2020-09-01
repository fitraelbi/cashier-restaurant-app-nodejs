
const model = require("../model/product")
const Product = {}

Product.all = async (req, res) => {
    try {
        const data = await model.GetAll()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

Product.add = (req, res) => {
    const { name, price, category } = req.body
    const data = model.Add(name, price, category)
    return res.send(data)
}

Product.edit = (req, res) => {
    const { id, name, price, category } = req.body
    console.log(category)
    let id_category = 0
    category == 'drink' ? id_category = 1 : 
    category == 'cake' ? id_category = 2 :
    category == 'food' ? id_category = 3 : id_category = 0 
    
    const data = model.Edit(id, name, price, id_category)
    
    return res.send(data)
}

Product.delete = (req, res) => {
    const { id } = req.body
    const data = model.Delete(id)
    return res.send(data)
}

Product.search = async (req, res) => {
    
    const name = req.query.name
    try {
        const data = await model.Search(name)
        return res.status(200).json(data) 
    } catch (error) {
        return res.status(500).json(error)
    }
}

Product.orderbyname = async (req, res) => {
    try {
        const data = await model.ByName()
        return res.status(200).json(data) 
    } catch (error) {
        return res.status(500).json(error)
    }
}

Product.orderbycategory = async (req, res) => {
    try {
        const data = await model.ByCategory()
        return res.status(200).json(data) 
    } catch (error) {
        return res.status(500).json(error)
    }
}

Product.orderbynew = async (req, res) => {
    try {
        const data = await model.ByNew()
        return res.status(200).json(data) 
    } catch (error) {
        return res.status(500).json(error)
    }
}

Product.orderbyprice = async (req, res) => {
    try {
        const data = await model.ByPrice()
        return res.status(200).json(data) 
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = Product