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

// module.exports.list = function list(stock) {
//     return new Promise((resolve) => {
//         conn.query('SELECT * FROM 每日股票交易事實表 where 股票代號 = ' + String(stock) + ' order by 日期序號 DESC ', (err, results) => {
//             if (err) { throw err; }
//             let open = String(results[0].開盤價)
//             let close = String(results[0].收盤價)
//             let upanddown = String(results[0].漲跌)
//             let upanddowns = upanddown[0] + " " + upanddown[1]
//             let high = String(results[0].最高點)
//             let low = String(results[0].最低點)
//             let lot = String(results[0].成交數)
//             let messagee = message = "查詢日期:" + "\n🔶股票代號:" + String(stock) + "\n🔶最新收盤價:" + close + "\n🔶漲跌:" + upanddowns +
//                 "\n🔶最高點:" + high + "\n🔶最低點:" + low + "\n🔶成交數:" + lot + "\n--------------------------\n"
//             resolve(messagee)
//         })
//     })
// }

module.exports.list = function list_test(stock) {
    return new Promise((resolve) => {
        conn.query('SELECT * FROM 每日股票交易 where 股票代號 = ' + String(stock) + ' order by 日期 DESC ', (err, results) => {
            if (err) { throw err; }
            let array = []
            array.push(results[0].日期)
            array.push(results[0].股票代號)
            array.push(results[0].股票名稱)
            array.push(results[0].成交)
            array.push(results[0].開盤)
            array.push(results[0].最高)
            array.push(results[0].最低)
            array.push(results[0].均價)
            array.push(results[0].昨收)
            array.push(results[0].漲跌幅)
            array.push(results[0].漲跌)
            array.push(results[0].總量)
            array.push(results[0].振幅)
            resolve(array)
        })
    })
}




