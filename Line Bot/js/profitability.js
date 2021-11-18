const mysql = require('mysql');
var dict = require("./dict")

var config =
{
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'ntub-line',
    port: 3306,
    ssl: true
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) {
        if (err) {
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        }
        else {
            console.log("Connection established.");
        }
    });

//資料庫連線設定

module.exports.profitability_data = function profitability_data_T(stock) {
    return new Promise((resolve) => {
        conn.query('SELECT * FROM profitability where stock = ? order by years Desc,quarter Desc;', [stock], (err, results) => {
            let array = []
            array.push(String(stock)+dict.dict_toCh(stock))
            array.push(results[0].years)
            array.push(results[0].quarter)
            array.push(String(results[0].gpm)+"%")
            array.push(String(results[0].roa)+"%")
            array.push(String(results[0].opm)+"%")
            array.push(String(results[0].roe)+"%")
            array.push(String(results[0].pbt)+"%")
            array.push(String(results[0].pb))
            resolve(array)
        })
    })
}
