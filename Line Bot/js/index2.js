const mysql = require('mysql');

var config =
{
    host: '127.0.0.1',
    user: 'root',
    password: 'C23670424989',
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

module.exports.list = function list(stock) {
    return new Promise((resolve) => {
        conn.query('SELECT * FROM 每日股票交易事實表 where 股票代號 = ' + String(stock) + ' order by 日期序號 DESC ', (err, results) => {
            if (err) { throw err; }
            let open = String(results[0].開盤價)
            let close = String(results[0].收盤價)
            let upanddown = String(results[0].漲跌)
            let upanddowns = upanddown[0] + " " + upanddown[1]
            let high = String(results[0].最高點)
            let low = String(results[0].最低點)
            let lot = String(results[0].成交數)
            let messagee = message = "今天日期為:" + date_list() + "\n股票代號:" + String(stock) + "\n最新收盤價:" + close + "\n漲跌:" + upanddowns +
                "\n最高點:" + high + "\n最低點:" + low + "\n成交數:" + lot + "\n==================="
            resolve(messagee)
        })
    })
}

function date_list() {
    let Today = new Date()
    let month = Today.getMonth() + 1
    if (month < 10) {
        month = "0" + month
    }
    let Td = +Today.getFullYear() + "-" + month + "-" + (Today.getDate())
    return (String(Td))
}



