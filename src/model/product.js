const database = require("../config/db")
const Product = {}

Product.GetAll = () => {
    return new Promise((resolve, reject) => {
        database
            .query("SELECT	product.id, product.name, product.price, category.name AS category FROM product INNER JOIN category ON product.id_category = category.id ORDER BY id ASC;")
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

Product.Add = (name, price, category) => {
    let id_category = 0
    category == 'drink' ? id_category = 1 : 
    category == 'cake' ? id_category = 2 :
    category == 'food' ? id_category = 3 : id_category = 0  
    
    console.log(id_category)

    database
        .query(`INSERT INTO product (name, price, id_category) VALUES ('${name}', ${price}, ${id_category})`)
        .then((res) => {
            return "Data berhasil ditambahkan"
        })
        .catch((err) => {
            return err
        })
}

Product.Edit = (id, name, price, id_category) => {
    database
        .query(
            `UPDATE product SET name='${name}', price='${price}', id_category='${id_category}' WHERE id=${id};`)
        .then((res) => {
            console.log(res)
            return "Data berhasil di update"
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

Product.Delete = (id) => {
    database
        .query(
            `DELETE from product WHERE id=${id};`)
        .then((res) => {
            console.log(res)
            return "Data berhasil di delete"
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

Product.Search = (name) => {
    return new Promise((resolve, reject) => {
        database
            .query(`SELECT	product.id, product.name, product.price, category.name AS category FROM product INNER JOIN category ON product.id_category = category.id WHERE product.name ILIKE '%${name}%';`)
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

Product.ByName = () => {
    return new Promise((resolve, reject) => {
        database
            .query(`SELECT	product.id, product.name, product.price, category.name AS category FROM product INNER JOIN category ON product.id_category = category.id ORDER BY product.name ASC;`)
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

Product.ByCategory = () => {
    return new Promise((resolve, reject) => {
        database
            .query(`SELECT product.id, product.name, product.price, category.name AS category FROM product INNER JOIN category ON product.id_category = category.id ORDER BY category.id ASC;`)
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

Product.ByNew = () => {
    return new Promise((resolve, reject) => {
        database
            .query(`SELECT product.id, product.name, product.price, category.name AS category FROM product INNER JOIN category ON product.id_category = category.id ORDER BY product.id DESC;`)
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

Product.ByPrice = () => {
    return new Promise((resolve, reject) => {
        database
            .query(`SELECT product.id, product.name, product.price, category.name AS category FROM product INNER JOIN category ON product.id_category = category.id ORDER BY product.price ASC;`)
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}


module.exports = Product