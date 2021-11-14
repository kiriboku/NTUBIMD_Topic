const mysql = require('mysql');

var config =
{
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'stock',
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


module.exports.Dividend_policy = function Dividend_policy(stock) {
    return new Promise((resolve) => {
        conn.query('SELECT * FROM 股利政策 where 股票代號 = ? order by 除權息日 DESC ;', [stock], (err, results) => {
            let array = []
            for (i = 0; i < 3; i++) {
                array_D = []
                array_D.push(results[i].除權息日)
                array_D.push(roundToTwo(parseFloat(results[i].配息)))
                array_D.push(results[i].配股)
                array_D.push(results[i].除權息前股價)
                if (results[i].填息天數 == 1) {
                    array_D.push('當日填息')
                } else {
                    array_D.push(results[i].填息天數)
                }
                array_D.push(results[i].合計殖利率)
                array_D.push(results[i].本益比)
                array_D.push(results[i].EPS)
                array.push(array_D)
            }
            total = array[0][1]+array[1][1]+array[2][1]
            array.push(stock)
            array.push(String(total))
            resolve(array)
        })
    })
}

