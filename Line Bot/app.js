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

var tw_news = ["台股新聞", "股票消息"]
var house = ["房產新聞"]
var forex = ["外匯新聞"]
var headline = ["頭條新聞", "最近的新聞"]
var money = ["理財新聞"]
var future = ["期貨新聞"]
var news_2330 = ["2330新聞", "台積電新聞"]
var news_2317 = ["2317新聞", "鴻海新聞"]
var news_2377 = ["2377新聞", "微星新聞"]
var news_2379 = ["2379新聞", "瑞昱新聞"]
var news_2383 = ["2383新聞", "台光電新聞"]
var news_1101 = ["1101新聞", "台泥新聞"]
var news_2002 = ["2002新聞", "中鋼新聞"]
var news_2603 = ["2603新聞", "長榮新聞"]
var news_2610 = ["2610新聞", "華航新聞"]
var news_2015 = ["2015新聞", "豐興新聞"]

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  if (event.message.text == "關注清單") {
    let array = []
    Promise.all([follow_watch_one.show_follow(event.source.userId)])
      .then(([oneSecond]) => {
        oneSecond.forEach(element => Promise.all([follow_watch_two.list(element)])
          .then(([oneSecond]) => {
            array.push(oneSecond)
          }));
      })
    setTimeout(() => {
      // 三秒後回傳資料
      event.reply(flex.check_watch_list_tiem(array)).then(function (data) {
        // 當訊息成功回傳後的處理
      })
    }, 500);
  } else if (event.message.text.substr(0, 1) == "+") {
    let stock = event.message.text.substr(1, 4)
    Promise.all([follow_watch_one.show_follow(event.source.userId)])
      .then(([oneSecond]) => {
        if (oneSecond.includes(stock)) {
          event.reply('股票代號：' + stock + '已在關注清單')
        }
        else {
          event.reply("將股票代號：" + stock + "加入關注清單").then(function (data) {
            // 當訊息成功回傳後的處理
            follow_watch_one.stock_insert(event.source.userId, stock)
          })
        }
      })
  } else if (event.message.text.substr(0, 1) == "-") {
    let stock = event.message.text.substr(1, 4)
    event.reply("將股票代號：" + stock + "從關注清單移除").then(function (data) {
      // 當訊息成功回傳後的處理
      follow_watch_one.stock_delete(event.source.userId, stock)
    })
  } else {
    var message = Fuzzball.user_question(event.message.text)
    if (tw_news.includes(message) == true) {
      Promise.all([News.search_News_db('tw')])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_tw(oneSecond))
        })
    } else if (house.includes(message) == true) {
      Promise.all([News.search_News_db('house')])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_house(oneSecond))
        })
    } else if (headline.includes(message) == true) {
      Promise.all([News.search_News_db('headline')])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_headline(oneSecond))
        })
    } else if (forex.includes(message) == true) {
      Promise.all([News.search_News_db('forex')])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_forex(oneSecond))
        })
    }
    else if (money.includes(message) == true) {
      Promise.all([News.search_News_db('money')])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_money(oneSecond))
        })
    }
    else if (future.includes(message) == true) {
      Promise.all([News.search_News_db('future')])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_future(oneSecond))
        })
    }
    else if (news_2330.includes(message) == true) {
      Promise.all([News.search_News_db(2330)])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_2330(oneSecond))
        })
    }
    else if (news_2317.includes(message) == true) {
      Promise.all([News.search_News_db(2317)])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_2317(oneSecond))
        })
    }
    else if (news_2377.includes(message) == true) {
      Promise.all([News.search_News_db(2377)])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_2377(oneSecond))
        })
    }
    else if (news_2379.includes(message) == true) {
      Promise.all([News.search_News_db(2379)])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_2379(oneSecond))
        })
    }
    else if (news_2015.includes(message) == true) {
      Promise.all([News.search_News_db(2015)])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_2015(oneSecond))
        })
    }
    else if (news_2383.includes(message) == true) {
      Promise.all([News.search_News_db(2383)])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_2383(oneSecond))
        })
    }
    else if (news_1101.includes(message) == true) {
      Promise.all([News.search_News_db(1101)])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_1101(oneSecond))
        })
    }
    else if (news_2002.includes(message) == true) {
      Promise.all([News.search_News_db(2002)])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_2002(oneSecond))
        })
    }
    else if (news_2603.includes(message) == true) {
      Promise.all([News.search_News_db(2603)])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_2603(oneSecond))
        })
    }
    else if (news_2610.includes(message) == true) {
      Promise.all([News.search_News_db(2610)])
        .then(([oneSecond]) => {
          event.reply(flex.flex_news_2610(oneSecond))
        })
    }
    else if (message == "漲幅最大股價") {
      Promise.all([follow_watch_two.close_date()])
        .then(([oneSecond]) => {
          Promise.all([follow_watch_two.best_rise(oneSecond)])
            .then(([oneSecond]) => {
              event.reply(flex.best_rise(oneSecond)).then(function (data) {
                // 當訊息成功回傳後的處理
              })
            })
        })
    }
    else if (message == "跌幅最大股價") {
      Promise.all([follow_watch_two.close_date()])
        .then(([oneSecond]) => {
          Promise.all([follow_watch_two.best_down(oneSecond)])
            .then(([oneSecond]) => {
              event.reply(flex.best_down(oneSecond)).then(function (data) {
                // 當訊息成功回傳後的處理
              })
            })
        })
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

