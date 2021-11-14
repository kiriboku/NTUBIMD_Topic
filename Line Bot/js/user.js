const mysql = require('mysql');
const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: 'qQ8Jy0v3j3pUlOebdVPnNmj7dxOC1Td8sfDIE7PiMnpxceApOWRmWdbP1buzeStt+WeOY+OFyJDqrkLK/DvIC+9vhED7MdqKoZ1D6q+y8WocAqBMqt1SVQX5LZmkVGv3m6j7fX8gW+CPjzPPJ7AdEAdB04t89/1O/w1cDnyilFU'
});


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

module.exports.user_insert = function user_insert(user_id, user_name) {
    conn.query('INSERT INTO user (user_id,user_name) VALUES (?,?);', [user_id, user_name],
        function (err, results) {
            if (err) throw err;
        })
};

//新增使用者至使用者清單

module.exports.user_delete = function user_delete(user_id) {
    conn.query('DELETE FROM user WHERE user_id =?;', [user_id],
        function (err, results) {
            if (err) throw err;
        })
};






