
const model = require("../model/product")
const result = require("../helper/respon")
const Product = {}

Product.all = async (req, res) => {
    try {
        const data = await model.GetAll()
        return result(res, 200, data)
    } catch (error) {
        return result(res, 500, error)
    }
}

Product.add = async (req, res) => {
    try{
        const { name, price, category, image } = req.body

        const datas = {
            name : name,
            price : price,
            category : category,
            image : image
        }

        const data = await model.Add(name, price, category, image)

        return result(res, 201, datas)
    }catch(error){
        return result(res, 500, error)
    }
}

Product.edit = async (req, res) => {

    try {
        const { id, name, price, category, image } = req.body
        
        let id_category = 0
        category == 'drink' ? id_category = 1 : 
        category == 'cake' ? id_category = 2 :
        category == 'food' ? id_category = 3 : id_category = 0 
        
        const datas = {
            id : id,
            name : name,
            price : price,
            category : category,
            image : image
        }
        
        const data = await model.Edit(id, name, price, id_category, image)
        
        return result(res, 202, datas)

    } catch (error) {
        return result(res, 500, error)
    }
}

Product.delete = async (req, res) => {
    try {
        const id = req.query.id
        dataDelete = await model.dataId(id)

        const data = await model.Delete(id)

        return result(res, 203, dataDelete)
    } catch (error) {
        return result(res, 500, error)
    } 
}

Product.search = async (req, res) => {
    
    const name = req.query.name
    try {
        const data = await model.Search(name)
        return result(res, 200, data) 
    } catch (error) {
        return result(res, 500, error)
    }
}

Product.orderbyname = async (req, res) => {
    try {
        const data = await model.ByName()
        return result(res, 200, data) 
    } catch (error) {
        return result(res, 500, error)
    }
}

Product.orderbycategory = async (req, res) => {
    try {
        const data = await model.ByCategory()
        return result(res, 200, data)
    } catch (error) {
        return result(res, 500, error)
    }
}

Product.orderbynew = async (req, res) => {
    try {
        const data = await model.ByNew()
        return result(res, 200, data) 
    } catch (error) {
        return result(res, 500, error)
    }
}

Product.orderbyprice = async (req, res) => {
    try {
        const data = await model.ByPrice()
        return result(res, 200, data)
    } catch (error) {
        return result(res, 500, error)
    }
}

module.exports = Product