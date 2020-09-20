const model = require("../model/users")
const result = require('../helper/respon')
const bcr = require("bcrypt")

const auth = {}

auth.login = async (req, res) => {
    try {
        const { name, password } = req.body
        const passDB = await model.getbyUser(name)

        if (passDB.length <= 0) {
            return result(res, 200, "Username tidak terdaftar")
        }
        
        const check = await bcr.compare(password, passDB[0].password)
        
        if (check) {
            return result(res, 200, "Login Berhasil")
            
        } else {
            return result(res, 200, "Password Salah")
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = auth
