var dict_stock={ "2317":"鴻海", "2330":"台積電", "2377":"微星", "2379":"瑞昱", "2383":"台光電", "1101":"台泥"
, "2015":"豐興", "2002":"中鋼", "2603":"長榮", "2610":"華航"};

module.exports.dict_toCh = function dict_toCh(stock){
    return dict_stock[stock]
}