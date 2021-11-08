const mysql = require('mysql');


var config =
{
    host: '127.0.0.1',
    user: 'root',
    password: 'C23670424989',
    database: 'line-bot',
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

module.exports.stock_insert = function stock_insert(user_id, stock) {
    conn.query('INSERT INTO follow (user_id,stock) VALUES (?,?);', [user_id, stock],
        function (err, results) {
            if (err) throw err;
        })
};

//新增股票代號至關注清單

module.exports.stock_delete = function stock_delete(user_id, stock) {
    conn.query('DELETE FROM follow WHERE user_id =? and stock = ?;', [user_id, stock],
        function (err, results) {
            if (err) throw err;
        })
};

//將關注清單內的股票代號移除

module.exports.show_follow = function show_follow(user_id) {
    return new Promise((resolve) => {
        conn.query("SELECT * FROM follow WHERE user_id =?", [user_id], (err, results) => {
            array = []
            for (i = 0; i < results.length; i++) {
                array.push(results[i].stock)
            }
            resolve(array)
        })
    })
}

//讀取關注清單
