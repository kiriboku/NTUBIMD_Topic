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

module.exports.search_News_db = function search_News_db(stock) {
    return new Promise((resolve) => {
        conn.query('SELECT * FROM news where news_type = ' + "'" + stock + "'", (err, results) => {
            let array = []
            for(i=0;i<3;i++){
                array_a = []
                array_a.push(results[i].title)
                array_a.push(results[i].url)
                array.push(array_a)
            }
            resolve(array)
        })
    })
}





