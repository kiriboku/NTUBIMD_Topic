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

module.exports.eps_data = function eps_data(stock) {
    return new Promise((resolve) => {
        conn.query('SELECT * FROM eps where stock = ? order by years Desc,quarter Desc;', [stock], (err, results) => {
            let array = []
            for (i = 0; i < 4; i++) {
                array_D = []
                array_D.push(results[i].years)
                array_D.push(results[i].quarter)
                array_D.push(String(results[i].eps))
                array.push(array_D)
            }
            array.push(dict.dict_toCh(stock))
            resolve(array)
        })
    })
}



