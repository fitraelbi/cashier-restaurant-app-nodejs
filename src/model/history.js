const database = require("../config/db")
const history = {}

history.GetAll = () => {
    return new Promise((resolve, reject) => {
        database
            .query(`SELECT invoices, cashier, to_char(date, 'dd mon yyyy') as date, orders, total FROM history ORDER BY invoices ASC;`)
            .then((res) => {
                resolve(res.rows)
                console.log("Berhasil ditampilkan")
            })
            .catch((err) => {
                reject(err)
            })
    })
}

history.Add = (invoices, cashier,  orders, total) => {
   
    database
        .query(`INSERT INTO history (invoices, cashier, date, orders, total) VALUES ('${invoices}', '${cashier}', current_timestamp, '${orders}', ${total});`)
        .then((res) => {
            console.log("Data berhasil ditambahkan") 
        })
        .catch((err) => {
            return err
        })
}

history.Edit = (invoices, cashier,  orders, total) => {
    
    database
        .query(
            `UPDATE history SET cashier='${cashier}', orders='${orders}', total=${total} WHERE invoices = '${invoices}';`)
        .then((res) => {
            console.log(res)
            return "Data berhasil di update"
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

history.Delete = (invoices) => {
    database
        .query(
            `DELETE from history WHERE id=${invoices};`)
        .then((res) => {
            console.log(res)
            return "Data berhasil di delete"
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

module.exports = history