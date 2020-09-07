const database = require("../config/db")
const category = {}

category.GetAll = () => {
    return new Promise((resolve, reject) => {
        database
            .query("SELECT * FROM category ORDER BY id ASC ")
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

category.Add = (name) => {
    console.log(name)
    database
        .query(`INSERT INTO category (name) VALUES ('${name}')`)
        .then((res) => {
            return "Data berhasil ditambahkan"
        })
        .catch((err) => {
            return err
        })
}

category.Edit = (id, name) => {
    database
        .query(
            `UPDATE category SET name='${name}' WHERE id=${id};`)
        .then((res) => {
            console.log(res)
            return "Data berhasil di update"
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

category.Delete = (id) => {
    database
        .query(
            `DELETE from category WHERE id=${id};`)
        .then((res) => {
            console.log(res)
            return "Data berhasil di delete"
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}



module.exports = category