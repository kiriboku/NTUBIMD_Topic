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

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

//將數字取到小數第二位

module.exports.Dividend_policy_data = function Dividend_policy_data(stock) {
    return new Promise((resolve) => {
        conn.query('SELECT * FROM dividend_policy where stock = ? order by ex_dividend_date DESC ;', [stock], (err, results) => {
            let array = []
            for (i = 0; i < 3; i++) {
                array_D = []
                array_D.push(results[i].ex_dividend_date)
                array_D.push(roundToTwo(parseFloat(results[i].dividend)))
                array_D.push(results[i].allotment)
                array_D.push(results[i].ex_dividend_date_price)
                if (results[i].re_day == 1) {
                    array_D.push('當日填息')
                } else {
                    array_D.push(results[i].re_day)
                }
                array_D.push(results[i].dividend_yield)
                array.push(array_D)
            }
            total = array[0][1]+array[1][1]+array[2][1]
            array.push(stock)
            array.push(dict.dict_toCh(stock))
            array.push(String(total))
            resolve(array)
        })
    })
}
