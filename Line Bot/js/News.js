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

module.exports.search_News_db = function search_News_db(News_type) {
    return new Promise((resolve) => {
        conn.query('SELECT * FROM news where 新聞類型 = ' + "'" + News_type + "'", (err, results) => {
            let array = []
            array.push(results[0].標題)
            array.push(results[0].網址)
            resolve(array)
        })
    })
}

// let News_tw_type = ["tw_1", "tw_2", "tw_3"]
// let News_tw = []
// News_tw_type.forEach(element => Promise.all([search_News_db(element)])
//     .then(([oneSecond]) => {
//         News_tw = News_tw.concat(oneSecond)
//     }));
// setTimeout(() => {
//     // 三秒後回傳資料
//     console.log(News_tw)
// }, 1000);

//呼叫範例






