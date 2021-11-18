import requests
from bs4 import BeautifulSoup
import mysql.connector

def news_db(tuple_stock):
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="ntub-line"
    )

    mycursor = mydb.cursor()
    
    sql = "INSERT INTO daily_stock_trading (trading_date,stock,company_name_ch,closing_price,opening_price,high_price,lowest_price,average_price,volume,closed_yesterday,ups_and_downs_fluctuation,ups_and_downs,total,total_yesterday,total_fluctuation) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    val = tuple_stock
    
    mycursor.execute(sql, val)
    
    mydb.commit()
    
    print(mycursor.rowcount, "record(s) affected")

def stock_date(stock):#日期
    array = []
    url="https://tw.stock.yahoo.com/quote/"+stock+".TW"
    r=requests.get(url)
    soup = BeautifulSoup(r.text,"html.parser")
    soups = soup.find_all(class_="C(#6e7780) Fz(12px) Fw(b)")
    for i in soups:
        date = i.get_text()
        array.append(date[5:15])
    return array


def stock_test(stock):#成交、開盤、最高、最低、均價、成交值(億)、昨收、漲跌幅、漲跌、總量、昨量、振幅
    array = []
    url="https://tw.stock.yahoo.com/quote/"+stock+".TW"
    r=requests.get(url)
    soup = BeautifulSoup(r.text,"html.parser")
    soups = soup.find_all(class_="price-detail-item H(32px) Mx(10px) D(f) Jc(sb) Ai(c) Bxz(bb) Px(0px) Py(4px) Bdbs(s) Bdbc($bd-primary-divider) Bdbw(1px)")
    for i in soups:
        count = 0
        for x in i:
            if count>0:
                array.append(x.get_text())
            count=count+1
    return array

def stock_spider():#日期、股票代號、股票名稱、成交、開盤、最高、最低、均價、成交值(億)、昨收、漲跌幅、漲跌、總量、昨量、振幅
    array_stock=["2317","2330","2377","2379","2383","1101","2015","2002","2603","2610"]
    for i in array_stock:
        array=[]
        array.extend(stock_date(i))
        name = stock_Name(i)
        array.append(i)
        array.append(name)
        array.extend(stock_test(i))
        ups_and_downs_fluctuation = array[10]
        del array[10]
        array.insert(10,ups_and_downs_fluctuation.replace("%",""))
        total = array[12]
        del array[12]
        array.insert(12,total.replace(",",""))
        total_yesterday = array[13]
        del array[13]
        array.insert(13,total_yesterday.replace(",",""))
        total_fluctuation = array[14]
        del array[14]
        array.insert(14,total_fluctuation.replace("%",""))
        print(tuple(array))
        news_db(tuple(array))

    
#股票字典-將輸入的股票代號轉換成股票名稱
def stock_Name(stock):
    dict_stock = {"2330":"台積電","2317":"鴻海","2377":"微星","2379":"瑞昱","2383":
                  "台光電","1101":"台泥","2015":"豐興","2002":"中鋼","2603":"長榮","2610":"華航"}
    Name = dict_stock[str(stock)]
    return Name

stock_spider()










   


