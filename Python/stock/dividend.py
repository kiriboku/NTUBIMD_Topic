import requests
from bs4 import BeautifulSoup
import mysql.connector

def dividend_policy(tuple_item):
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="ntub-line"
    )

    mycursor = mydb.cursor()
    
    sql = "INSERT INTO dividend_policy (stock,ex_dividend_date,ex_dividend_date_price,dividend,allotment,dividend_yield,re_day,day) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)"
    val = tuple_item
    
    mycursor.execute(sql, val)
    
    mydb.commit()
    
    print(mycursor.rowcount, "record(s) affected")

def get_dividend(stock):
    r = requests.get("https://stockinfo.tw/dividends/?stockSearch="+str(stock)) #將網頁資料GET下來
    html = BeautifulSoup(r.text,"html.parser") #將網頁資料以html.parser
    tbody = html.find("tbody")
    # tr = tbody.find_all("tr")擷取出tr
    count_tr = len(tbody.find_all('tr'))
    for i in range(1,count_tr):
        tr = tbody.find_all("tr")[i]
        count_td = len(tr.find_all('td'))
        date = tr.find_all("td")[0].get_text()
        if len(date[:10])!="":
            date_2 = date[:10]
        else:
            date_2 = date[:9]
        data_tuple = ()
        data_tuple = (str(stock),)
        data_tuple+=(date_2,)
        for i in range(1,count_td):
            if i!=4 and i!=5 and i!=7 and i!=8:
                td = tr.find_all("td")[i].get_text()
                data_tuple+=(td,)
        dividend_policy(data_tuple)
        
stock_array = [2317,2330,2377,2379,2383,1101,2015,2002,2603,2610]
        
for i in stock_array:
    get_dividend(i)
