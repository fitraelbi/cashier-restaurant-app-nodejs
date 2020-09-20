const bcr = require('bcrypt')

async function hashPassword(pass){
    try {
        const salt = await bcr.genSalt(10)
        const result = await bcr.hash(pass, salt)
        return result

    } catch (error) {
        throw error
    }
}

module.exports = hashPassword