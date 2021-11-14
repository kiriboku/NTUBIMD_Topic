const mysql = require('mysql');

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

module.exports.list = function list_test(stock) {
    return new Promise((resolve) => {
        conn.query('SELECT * FROM daily_stock_trading where stock = ' + String(stock) + ' order by trading_date DESC ', (err, results) => {
            if (err) { throw err; }
            let array = []
            array.push(results[0].trading_date)
            array.push(String(results[0].stock))
            array.push(results[0].company_name_ch)
            array.push(String(results[0].closing_price))
            array.push(String(results[0].opening_price))
            array.push(String(results[0].high_price))
            array.push(String(results[0].lowest_price))
            array.push(String(results[0].average_price))
            array.push(String(results[0].closed_yesterday))
            array.push(String(results[0].ups_and_downs_fluctuation))
            array.push(String(results[0].ups_and_downs))
            array.push(results[0].total)
            array.push(results[0].total_fluctuation)
            resolve(array)
        })
    })
}

module.exports.close_date = function close_date() {
    return new Promise((resolve) => {
        conn.query('SELECT trading_date FROM daily_stock_trading order by trading_date DESC ', (err, results) => {
            resolve(results[0].trading_date)
        })
    })
}

// module.exports.best_down = function best_rise(date) {
//     return new Promise((resolve) => {
//         conn.query('SELECT * FROM 每日股票交易 where 日期 = "' + date + '" order by 漲跌幅 DESC ', (err, results) => {
//             if (err) { throw err; }
//             let y = 0
//             let i = 0
//             let array = []
//             while (y < 3) {
//                 if (results[i].昨收 > results[i].成交) {
//                     let array_ndividual = []
//                     array_ndividual.push(results[i].股票代號)
//                     array_ndividual.push(results[i].股票名稱)
//                     array_ndividual.push(results[i].漲跌幅)
//                     array.push(array_ndividual)
//                     array_ndividual.splice
//                     y++
//                     i++
//                 } else {
//                     i++
//                 }
//             }
//             resolve(array)
//         })
//     })
// }

// module.exports.best_rise = function best_rise(date) {
//     return new Promise((resolve) => {
//         conn.query('SELECT * FROM 每日股票交易 where 日期 = "' + date + '" order by 漲跌幅 DESC ', (err, results) => {
//             if (err) { throw err; }
//             let y = 0
//             let i = 0
//             let array = []
//             while (y < 3) {
//                 if (results[i].成交 > results[i].昨收) {
//                     let array_ndividual = []
//                     array_ndividual.push(results[i].股票代號)
//                     array_ndividual.push(results[i].股票名稱)
//                     array_ndividual.push(results[i].漲跌幅)
//                     array.push(array_ndividual)
//                     array_ndividual.splice
//                     y++
//                     i++
//                 } else {
//                     i++
//                 }
//             }
//             resolve(array)
//         })
//     })
// }




