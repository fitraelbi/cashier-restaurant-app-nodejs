const model = require("../model/users")
const result = require("../helper/respon")
const hash = require("../helper/hash")
const hashPassword = require("../helper/hash")
const user = {}

user.all = async (req, res) => {
    try {
        const data = await model.GetAll()
        return result(res, 200, data)
    } catch (error) {
        return result(res, 500, error)
    }
}



user.add = async (req, res) => {
    try{
        const { user, password, email } = req.body

        const passHash = await hashPassword(password)

        const datas = {
            user : user,
            password : passHash,
            email : email
        }

        const data = await model.Add(user, passHash, email)

        return result(res, 201, datas)
    }catch(error){
        return result(res, 500, error)
    }
}

user.edit = async (req, res) => {

    try {
        const { id, user, password, email } = req.body
        
        const datas = {
            user : user,
            password : password,
            email : email
        }
        
        const data = await model.Edit(id, user, password, email)
        
        return result(res, 202, datas)

    } catch (error) {
        return result(res, 500, error)
    }
}

user.delete = async (req, res) => {
    try {
        const id = req.query.id
        dataDelete = await model.dataId(id)

        const data = await model.Delete(id)

        return result(res, 203, dataDelete)
    } catch (error) {
        return result(res, 500, error)
    }
    
   
}

module.exports = user
