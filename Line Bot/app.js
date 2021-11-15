// 引用linebot SDK
const linebot = require('linebot');
const line = require('@line/bot-sdk');
var follow_watch_two = require('./js/follow_watch_two');
var follow_watch_one = require('./js/follow_watch_one');
var flex = require("./js/flex");
var Fuzzball = require('./Fuzzball.js/Fuzzball');
var News = require("./js/News")
var user = require("./js/user")
var Dividend_policy = require("./js/Dividend_policy")
var dict = require("./js/dict")
var company = require("./js/company")
var eps = require("./js/eps")
var profitability = require("./js/profitability")

const client = new line.Client({
  channelAccessToken: 'qQ8Jy0v3j3pUlOebdVPnNmj7dxOC1Td8sfDIE7PiMnpxceApOWRmWdbP1buzeStt+WeOY+OFyJDqrkLK/DvIC+9vhED7MdqKoZ1D6q+y8WocAqBMqt1SVQX5LZmkVGv3m6j7fX8gW+CPjzPPJ7AdEAdB04t89/1O/w1cDnyilFU='
});

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

var array_company = ["2317", "2330", "2377", "2379", "2383", "1101", "2015", "2002", "2603", "2610"];

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
        if (array_company.includes(stock)) {
          if (oneSecond.includes(stock)) {
            event.reply('股票代號：' + stock + '已在關注清單')
          }
          else {
            event.reply("將股票代號：" + stock + "加入關注清單").then(function (data) {
              // 當訊息成功回傳後的處理
              follow_watch_one.stock_insert(event.source.userId, stock)
            })
          }
        }
        else {
          event.reply("很抱歉，我們暫時沒有 " + stock + " 的資料")
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
          oneSecond.push(dict.dict_toCh("2330"))
          event.reply(flex.flex_news_stock(oneSecond))
        })
    }
    else if (news_2317.includes(message) == true) {
      Promise.all([News.search_News_db(2317)])
        .then(([oneSecond]) => {
          oneSecond.push(dict.dict_toCh("2317"))
          event.reply(flex.flex_news_stock(oneSecond))
        })
    }
    else if (news_2377.includes(message) == true) {
      Promise.all([News.search_News_db(2377)])
        .then(([oneSecond]) => {
          oneSecond.push(dict.dict_toCh("2377"))
          event.reply(flex.flex_news_stock(oneSecond))
        })
    }
    else if (news_2379.includes(message) == true) {
      Promise.all([News.search_News_db(2379)])
        .then(([oneSecond]) => {
          oneSecond.push(dict.dict_toCh("2379"))
          event.reply(flex.flex_news_stock(oneSecond))
        })
    }
    else if (news_2015.includes(message) == true) {
      Promise.all([News.search_News_db(2015)])
        .then(([oneSecond]) => {
          oneSecond.push(dict.dict_toCh("2015"))
          event.reply(flex.flex_news_stock(oneSecond))
        })
    }
    else if (news_2383.includes(message) == true) {
      Promise.all([News.search_News_db(2383)])
        .then(([oneSecond]) => {
          oneSecond.push(dict.dict_toCh("2383"))
          event.reply(flex.flex_news_stock(oneSecond))
        })
    }
    else if (news_1101.includes(message) == true) {
      Promise.all([News.search_News_db(1101)])
        .then(([oneSecond]) => {
          oneSecond.push(dict.dict_toCh("1101"))
          event.reply(flex.flex_news_stock(oneSecond))
        })
    }
    else if (news_2002.includes(message) == true) {
      Promise.all([News.search_News_db(2002)])
        .then(([oneSecond]) => {
          oneSecond.push(dict.dict_toCh("2002"))
          event.reply(flex.flex_news_stock(oneSecond))
        })
    }
    else if (news_2603.includes(message) == true) {
      Promise.all([News.search_News_db(2603)])
        .then(([oneSecond]) => {
          oneSecond.push(dict.dict_toCh("2603"))
          event.reply(flex.flex_news_stock(oneSecond))
        })
    }
    else if (news_2610.includes(message) == true) {
      Promise.all([News.search_News_db(2610)])
        .then(([oneSecond]) => {
          oneSecond.push(dict.dict_toCh("2610"))
          event.reply(flex.flex_news_stock(oneSecond))
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
    else if (message == "怎麼選股票") {
      event.reply(flex.How_to_choice_stock())
    }
    else if (message == "新手如何開戶") {
      event.reply(flex.Open_an_account())
    }
    else if (message == "什麼是移動平均線") {
      event.reply(flex.What_is_movie_average())
    }
    else if (message == "2330基本資料") {
      Promise.all([company.company_data(2330)])
        .then(([oneSecond]) => {
          event.reply(flex.company_data(oneSecond))
        })
    }
    else if (message == "2330每股盈餘") {
      Promise.all([eps.eps_data(2330)])
        .then(([oneSecond]) => {
          event.reply(flex.flex_eps(oneSecond))
        })
    }
    else if (message == "2330獲利能力") {
      Promise.all([profitability.get_close_date()])
        .then(([oneSecond]) => {
          Promise.all([profitability.profitability_data(2330,oneSecond)])
            .then(([oneSecond]) => {
              event.reply(flex.flex_profitability(oneSecond)).then(function (data) {
                // 當訊息成功回傳後的處理
              })
            })
        })
    }
    else if (message == "2330股利政策") {
      Promise.all([Dividend_policy.Dividend_policy_data(2330)])
      .then(([oneSecond]) => {
        event.reply(flex.flex_Dividend_policy(oneSecond))
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
  client.getProfile(event.source.userId)
    .then((profile) => {
      user.user_insert(profile.userId, profile.displayName)
    })
    .catch((err) => {
      // error handling
    });
});

bot.on('unfollow', function (event) {
  userId = String(event.source.userId)
  user.user_delete(userId)
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
  console.log('[BOT已準備就緒]');
});

