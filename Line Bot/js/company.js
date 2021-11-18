const mysql = require('mysql');

var config =
{
    host: '127.0.0.1',
    user: 'root',
    password: 'C23670424989',
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

module.exports.company_data = function company_data(stock) {
    return new Promise((resolve) => {
        conn.query('SELECT * FROM company where stock = ?;', [stock], (err, results) => {
            let array = []
            array.push(results[0].stock)
            array.push(results[0].company_name_ch)
            array.push(results[0].company_name_en)
            array.push(results[0].type_of_industry)
            array.push(results[0].establishmen)
            array.push(results[0].time_to_market)
            resolve(array)
        })
    })
}
