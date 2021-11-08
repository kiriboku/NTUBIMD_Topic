fuzz = require('fuzzball')//require 模組

options = { full_process: false, wildcards: "我想知道" }

module.exports.user_question = function user_question(quest) {
    Str_quest = String(quest)
    // var cla_1 = classify_1(Str_quest)
    switch (classify_1(Str_quest)) {
        case '交易資料':
            var classify2 = classify_stock(quest, 1)
            break;
        case '查詢新聞':
            var classify2 = classify_news(quest, 1);
            break;
        case '基本知識':
            var classify2 = classify_kno(quest, 1)
            break;
        case '公司資料':
            var classify2 = classify_com(quest, 1)
            break;
        case '個股新聞':
            var classify2 = classify_com_news(quest, 1)
            break;
        default:
            var classify2 = '沒有符合的條件'
    }
    return classify2
}

function classify_1(quest) {
    Str_quest = String(quest)
    a = classify_stock(Str_quest, 0)
    b = classify_news(Str_quest, 0)
    c = classify_kno(Str_quest, 0)
    d = classify_com(Str_quest, 0)
    e = classify_com_news(Str_quest, 0)
    let dic = { "交易資料": a, "查詢新聞": b, "基本知識": c, "公司資料": d, "個股新聞": e }//將分數製作成字典
    let keyArr = Object.keys(dic)//將字典轉換成組數
    let max = 0
    let re_classify_1 = ""
    for (let i = 0; i < keyArr.length; i++) {
        if (dic[keyArr[i]] > max) {
            max = dic[keyArr[i]]
        }
    }
    // 取出字典最大值
    for (let key in dic) {
        if (dic[key] == max) {
            re_classify_1 = key
        }
    }
    // 比對最大值屬於哪個鍵
    return (re_classify_1)
}

function classify_news(quest, turn) {
    Str_quest = String(quest)
    let choices = ["期貨新聞", "台股新聞", "外匯新聞", "房產新聞", "理財新聞", "頭條新聞", "最近的新聞", "股票消息"]
    results = fuzz.extract(Str_quest, choices)//fuzz.extract(query, choices, options);
    let max = 0
    let max_text = 0
    for (let i = 0; i < choices.length; i++) {
        if (results[i][1] > max) {
            max = results[i][1]//比較最大值
            max_text = results[i][0]//取出最大值的字元
        }
    }
    if (turn == 0) {
        return (max)
    } else {
        return (max_text)
    }
}

function classify_com_news(quest, turn) {
    Str_quest = String(quest)
    let choices = ["2317新聞", "鴻海新聞", "2330新聞", "台積電新聞", "2377新聞", "微星新聞", "2379新聞", "瑞昱新聞"
        , "2383新聞", "台光電新聞", "1101新聞", "台泥新聞", "2002新聞", "中鋼新聞", "2603新聞", "長榮新聞", "2610新聞", "華航新聞","2015新聞","豐興新聞"]
    results = fuzz.extract(Str_quest, choices)//fuzz.extract(query, choices, options);
    let max = 0
    let max_text = 0
    for (let i = 0; i < choices.length; i++) {
        if (results[i][1] > max) {
            max = results[i][1]//比較最大值
            max_text = results[i][0]//取出最大值的字元
        }
    }
    if (turn == 0) {
        return (max)
    } else {
        return (max_text)
    }
}

function classify_stock(quest, turn) {
    Str_quest = String(quest)
    let choices = ["台股走勢圖", "2317股價", "台積電股價", "2330股價", "2377股價", "2379股價", "2383股價", "1101股價", "2002股價", "2603股價", "2610股價", "9957股價","漲幅最大股價","跌幅最大股價"]
    results = fuzz.extract(Str_quest, choices)//fuzz.extract(query, choices, options);
    let max = 0
    let max_text = 0
    for (let i = 0; i < choices.length; i++) {
        if (results[i][1] > max) {
            max = results[i][1]//比較最大值
            max_text = results[i][0]//取出最大值的字元
        }
    }
    if (turn == 0) {
        return (max)
    } else {
        return (max_text)
    }
}

function classify_kno(quest, turn) {
    Str_quest = String(quest)
    let choices = ["什麼是股票", "什麼是期貨", "什麼是債券", "什麼是ETF", "什麼是K線", "什麼是KD線"]
    results = fuzz.extract(Str_quest, choices)//fuzz.extract(query, choices, options);
    let max = 0
    let max_text = 0
    for (let i = 0; i < choices.length; i++) {
        if (results[i][1] > max) {
            max = results[i][1]//比較最大值
            max_text = results[i][0]//取出最大值的字元
        }
    }
    if (turn == 0) {
        return (max)
    } else {
        return (max_text)
    }
}

function classify_com(quest, turn) {
    Str_quest = String(quest)
    let choices = ["台積電每股盈餘", "台積電經營能力", "台積電獲利能力"]
    results = fuzz.extract(Str_quest, choices)//fuzz.extract(query, choices, options);
    let max = 0
    let max_text = 0
    for (let i = 0; i < choices.length; i++) {
        if (results[i][1] > max) {
            max = results[i][1]//比較最大值
            max_text = results[i][0]//取出最大值的字元
        }
    }
    if (turn == 0) {
        return (max)
    } else {
        return (max_text)
    }
}
