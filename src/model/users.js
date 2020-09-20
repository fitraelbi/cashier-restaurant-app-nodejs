const database = require("../config/db")
const users = {}

users.GetAll = () => {
    return new Promise((resolve, reject) => {
        database
            .query("SELECT * FROM users ORDER BY id ASC ;")
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

users.getbyUser = (name) => {
    console.log(name)
    return new Promise((resolve, reject) => {
        database
            .query(`SELECT * FROM users WHERE user_name = '${name}' OR email = '${name}' ;`)
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

users.Add = (user, password, email) => {
    console.log(user, password, email)
    database
        .query(`INSERT INTO public.users("user_name", password, email) VALUES ('${user}', '${password}', '${email}');`)
        .then((res) => {
            return "Data berhasil ditambahkan"
        })
        .catch((err) => {
            return err
        })
}

users.Edit = (id, user, password, email) => {
    database
        .query(
            `UPDATE users SET user_name='${user}', password='${password}', email='${email}' WHERE id=${id};`)
        .then((res) => {
            console.log(res)
            return "Data berhasil di update"
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

users.Delete = (id) => {
    database
        .query(
            `DELETE from users WHERE id=${id};`)
        .then((res) => {
            console.log(res)
            return "Data berhasil di delete"
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}



module.exports = users