const database = require("../config/db")
const Product = {}

Product.GetAll = () => {
    return new Promise((resolve, reject) => {
        database
            .query("SELECT	product.id, product.name, product.price, category.name AS category, product.image FROM product INNER JOIN category ON product.category_id = category.id ORDER BY id ASC;")
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

Product.dataId = (id) => {
    return new Promise((resolve, reject) => {
        database
            .query(`SELECT	product.id, product.name, product.price, category.name AS category, product.image FROM product INNER JOIN category ON product.category_id = category.id WHERE  product.id = ${id};`)
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

Product.Add = (name, price, category, image) => {
    let id_category = 0
    category == 'drink' ? id_category = 1 : 
    category == 'cake' ? id_category = 2 :
    category == 'food' ? id_category = 3 : id_category = 0  

    database
        .query(`INSERT INTO product (name, price, category_id, image) VALUES ('${name}', ${price}, ${id_category}, '${image}')`)
        .then((res) => {
            return "Data berhasil ditambahkan"
        })
        .catch((err) => {
            return err
        })
}

Product.Edit = (id, name, price, id_category, image) => {
    database
        .query(
            `UPDATE product SET name='${name}', price='${price}', category_id='${id_category}', image='${image}' WHERE id=${id};`)
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
            .query(`SELECT	product.id, product.name, product.price, category.name AS category, product.image  FROM product INNER JOIN category ON product.category_id = category.id WHERE product.name ILIKE '%${name}%';`)
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
            .query(`SELECT	product.id, product.name, product.price, category.name AS category, product.image  FROM product INNER JOIN category ON product.category_id = category.id ORDER BY product.name ASC;`)
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
            .query(`SELECT product.id, product.name, product.price, category.name AS category, product.image  FROM product INNER JOIN category ON product.category_id = category.id ORDER BY category.id ASC;`)
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
            .query(`SELECT product.id, product.name, product.price, category.name AS category, product.image  FROM product INNER JOIN category ON product.category_id = category.id ORDER BY product.id DESC;`)
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
            .query(`SELECT product.id, product.name, product.price, category.name AS category, product.image  FROM product INNER JOIN category ON product.category_id = category.id ORDER BY product.price ASC;`)
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}


module.exports = Product