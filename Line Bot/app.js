// 引用linebot SDK
const linebot = require('linebot');
var follow_watch_two = require('./js/follow_watch_two');
var follow_watch_one = require('./js/follow_watch_one');
var flex = require("./js/flex");
var Fuzzball = require('./Fuzzball.js/Fuzzball');
var News = require("./js/News")

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '1656110228',
  channelSecret: '4dc186c1cecba6df2483e85370fbc0e9',
  channelAccessToken: 'qQ8Jy0v3j3pUlOebdVPnNmj7dxOC1Td8sfDIE7PiMnpxceApOWRmWdbP1buzeStt+WeOY+OFyJDqrkLK/DvIC+9vhED7MdqKoZ1D6q+y8WocAqBMqt1SVQX5LZmkVGv3m6j7fX8gW+CPjzPPJ7AdEAdB04t89/1O/w1cDnyilFU='
});

var tw_news = ["台股新聞","股票消息"]
var house = ["房產新聞"]
var forex = ["外匯新聞"]
var headline = ["頭條新聞", "最近的新聞"]
var money = ["理財新聞"]
var future = ["期貨新聞"]

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  if (event.message.text == "關注清單") {
    let t = ""
    Promise.all([follow_watch_one.show_follow(event.source.userId)])
      .then(([oneSecond]) => {
        oneSecond.forEach(element => Promise.all([follow_watch_two.list(element)])
          .then(([oneSecond]) => {
            t = t + oneSecond
          }));
      })
    setTimeout(() => {
      // 三秒後回傳資料
      event.reply(t).then(function (data) {
        // 當訊息成功回傳後的處理
      })
    }, 1500);
  } else if (event.message.text.substr(0, 1) == "+") {
    let stock = event.message.text.substr(1, 4)
    event.reply("將股票代號：" + stock + "加入關注清單").then(function (data) {
      // 當訊息成功回傳後的處理
      follow_watch_one.insertData_load(event.source.userId, stock)
    })
  } else if (event.message.text.substr(0, 1) == "-") {
    let stock = event.message.text.substr(1, 4)
    event.reply("將股票代號：" + stock + "從關注清單移除").then(function (data) {
      // 當訊息成功回傳後的處理
      follow_watch_one.remove_Data_load(event.source.userId, stock)
    })
  } else {
    var message = Fuzzball.user_question(event.message.text)
    if (tw_news.includes(message) == true) {
      let News_tw_type = ["tw_1", "tw_2", "tw_3"]
      let News_tw = []
      News_tw_type.forEach(element => Promise.all([News.search_News_db(element)])
        .then(([oneSecond]) => {
          News_tw = News_tw.concat(oneSecond)
        }));
      setTimeout(() => {
        // 三秒後回傳資料
        event.reply(flex.flex_news_tw(News_tw)).then(function (data) {
          // 當訊息成功回傳後的處理
        })
      }, 1000);
    } else if (house.includes(message) == true) {
      let News_tw_type = ["house_1", "house_2", "house_3"]
      let News_tw = []
      News_tw_type.forEach(element => Promise.all([News.search_News_db(element)])
        .then(([oneSecond]) => {
          News_tw = News_tw.concat(oneSecond)
        }));
      setTimeout(() => {
        // 三秒後回傳資料
        event.reply(flex.flex_news_house(News_tw)).then(function (data) {
          // 當訊息成功回傳後的處理
        })
      }, 1000);
    } else if (headline.includes(message) == true) {
      let News_tw_type = ["headline_1", "headline_2", "headline_3"]
      let News_tw = []
      News_tw_type.forEach(element => Promise.all([News.search_News_db(element)])
        .then(([oneSecond]) => {
          News_tw = News_tw.concat(oneSecond)
        }));
      setTimeout(() => {
        // 三秒後回傳資料
        event.reply(flex.flex_news_headline(News_tw)).then(function (data) {
          // 當訊息成功回傳後的處理
        })
      }, 1000);
    } else if (forex.includes(message) == true) {
      let News_tw_type = ["forex_1", "forex_2", "forex_3"]
      let News_tw = []
      News_tw_type.forEach(element => Promise.all([News.search_News_db(element)])
        .then(([oneSecond]) => {
          News_tw = News_tw.concat(oneSecond)
        }));
      setTimeout(() => {
        // 三秒後回傳資料
        event.reply(flex.flex_news_forex(News_tw)).then(function (data) {
          // 當訊息成功回傳後的處理
        })
      }, 1000);
    }
    else if (money.includes(message) == true) {
      let News_tw_type = ["money_1", "money_2", "money_3"]
      let News_tw = []
      News_tw_type.forEach(element => Promise.all([News.search_News_db(element)])
        .then(([oneSecond]) => {
          News_tw = News_tw.concat(oneSecond)
        }));
      setTimeout(() => {
        // 三秒後回傳資料
        event.reply(flex.flex_news_money(News_tw)).then(function (data) {
          // 當訊息成功回傳後的處理
        })
      }, 1000);
    }
    else if (future.includes(message) == true) {
      let News_tw_type = ["future_1", "future_2", "future_3"]
      let News_tw = []
      News_tw_type.forEach(element => Promise.all([News.search_News_db(element)])
        .then(([oneSecond]) => {
          News_tw = News_tw.concat(oneSecond)
        }));
      setTimeout(() => {
        // 三秒後回傳資料
        event.reply(flex.flex_news_future(News_tw)).then(function (data) {
          // 當訊息成功回傳後的處理
        })
      }, 1000);
    }
    else {
      event.reply(message).then(function (data) {
        // 當訊息成功回傳後的處理
      })
    }
  }
});

bot.on('follow', function (event) {
  userId = String(event.source.userId)
  index.new_user_creat(userId)
  event.reply("謝謝加入好友").then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});


// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
  console.log('[BOT已準備就緒]');
});

