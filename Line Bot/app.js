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
            follow_watch_one.insertData_load(event.source.userId, stock)
          })
        }
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
    else if (news_2330.includes(message) == true) {
      let News_tw_type = ["2330_1", "2330_2", "2330_3"]
      let News_tw = []
      News_tw_type.forEach(element => Promise.all([News.search_News_db(element)])
        .then(([oneSecond]) => {
          News_tw = News_tw.concat(oneSecond)
        }));
      setTimeout(() => {
        // 三秒後回傳資料
        event.reply(flex.flex_news_2330(News_tw)).then(function (data) {
          // 當訊息成功回傳後的處理
        })
      }, 1000);
    }
    else if (news_2317.includes(message) == true) {
      let News_tw_type = ["2317_1", "2317_2", "2317_3"]
      let News_tw = []
      News_tw_type.forEach(element => Promise.all([News.search_News_db(element)])
        .then(([oneSecond]) => {
          News_tw = News_tw.concat(oneSecond)
        }));
      setTimeout(() => {
        // 三秒後回傳資料
        event.reply(flex.flex_news_2317(News_tw)).then(function (data) {
          // 當訊息成功回傳後的處理
        })
      }, 1000);
    }
    else if (news_2377.includes(message) == true) {
      let News_tw_type = ["2377_1", "2377_2", "2377_3"]
      let News_tw = []
      News_tw_type.forEach(element => Promise.all([News.search_News_db(element)])
        .then(([oneSecond]) => {
          News_tw = News_tw.concat(oneSecond)
        }));
      setTimeout(() => {
        // 三秒後回傳資料
        event.reply(flex.flex_news_2377(News_tw)).then(function (data) {
          // 當訊息成功回傳後的處理
        })
      }, 1000);
    }
    else if (news_2379.includes(message) == true) {
      let News_tw_type = ["2379_1", "2379_2", "2379_3"]
      let News_tw = []
      News_tw_type.forEach(element => Promise.all([News.search_News_db(element)])
        .then(([oneSecond]) => {
          News_tw = News_tw.concat(oneSecond)
        }));
      setTimeout(() => {
        // 三秒後回傳資料
        event.reply(flex.flex_news_2379(News_tw)).then(function (data) {
          // 當訊息成功回傳後的處理
        })
      }, 1000);
    }
    else if (news_2383.includes(message) == true) {
      let News_tw_type = ["2383_1", "2383_2", "2383_3"]
      let News_tw = []
      News_tw_type.forEach(element => Promise.all([News.search_News_db(element)])
        .then(([oneSecond]) => {
          News_tw = News_tw.concat(oneSecond)
        }));
      setTimeout(() => {
        // 三秒後回傳資料
        event.reply(flex.flex_news_2383(News_tw)).then(function (data) {
          // 當訊息成功回傳後的處理
        })
      }, 1000);
    }
    else if (news_1101.includes(message) == true) {
      let News_tw_type = ["1101_1", "1101_2", "1101_3"]
      let News_tw = []
      News_tw_type.forEach(element => Promise.all([News.search_News_db(element)])
        .then(([oneSecond]) => {
          News_tw = News_tw.concat(oneSecond)
        }));
      setTimeout(() => {
        // 三秒後回傳資料
        event.reply(flex.flex_news_1101(News_tw)).then(function (data) {
          // 當訊息成功回傳後的處理
        })
      }, 1000);
    }
    else if (news_2002.includes(message) == true) {
      let News_tw_type = ["2002_1", "2002_2", "2002_3"]
      let News_tw = []
      News_tw_type.forEach(element => Promise.all([News.search_News_db(element)])
        .then(([oneSecond]) => {
          News_tw = News_tw.concat(oneSecond)
        }));
      setTimeout(() => {
        // 三秒後回傳資料
        event.reply(flex.flex_news_2002(News_tw)).then(function (data) {
          // 當訊息成功回傳後的處理
        })
      }, 1000);
    }
    else if (news_2603.includes(message) == true) {
      let News_tw_type = ["2603_1", "2603_2", "2603_3"]
      let News_tw = []
      News_tw_type.forEach(element => Promise.all([News.search_News_db(element)])
        .then(([oneSecond]) => {
          News_tw = News_tw.concat(oneSecond)
        }));
      setTimeout(() => {
        // 三秒後回傳資料
        event.reply(flex.flex_news_2603(News_tw)).then(function (data) {
          // 當訊息成功回傳後的處理
        })
      }, 1000);
    }
    else if (news_2610.includes(message) == true) {
      let News_tw_type = ["2610_1", "2610_2", "2610_3"]
      let News_tw = []
      News_tw_type.forEach(element => Promise.all([News.search_News_db(element)])
        .then(([oneSecond]) => {
          News_tw = News_tw.concat(oneSecond)
        }));
      setTimeout(() => {
        // 三秒後回傳資料
        event.reply(flex.flex_news_2610(News_tw)).then(function (data) {
          // 當訊息成功回傳後的處理
        })
      }, 1000);
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

