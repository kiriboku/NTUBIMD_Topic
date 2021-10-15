import requests
from bs4 import BeautifulSoup
import pymysql
import mysql.connector

def news_tw_stock():
    url = "https://news.cnyes.com/news/cat/tw_stock";
    tw_stock = requests.get(url)
    tw_stock_1 = BeautifulSoup(tw_stock.text,"html.parser")
    tw_stock_2 = tw_stock_1.find_all(class_ = "_1Zdp",limit = 3)
    tw_stock_array = []
    for i in tw_stock_2:
        tw_stock_array.append(i.get("title"))
        tw_stock_news_url = "https://news.cnyes.com"
        tw_stock_array.append(tw_stock_news_url + i.get("href"))
    print(tw_stock_array)
    # for i in tw_stock_2:
    #     tw_stock_array = []
    #     tw_stock_tuple = []
    #     tw_stock_tuple +=i.get("title")
    #     print(i.get("title"))
    # print(tw_stock_tuple)
    
# news_tw_stock()

# mydb = mysql.connector.connect(
#   host="127.0.0.1",
#   user="root",
#   password="C23670424989",
#   database="line-bot"
# )

# mycursor = mydb.cursor()

# sql = "UPDATE news SET 標題 = %s WHERE 新聞代號 = %s"
# val = ("Valley 345", "tw_3")

# mycursor.execute(sql, val)

# mydb.commit()

# print(mycursor.rowcount, "record(s) affected")

def news_db():
    
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="line-bot"
    )

    mycursor = mydb.cursor()
    
    sql = "UPDATE news SET 標題 = %s WHERE 新聞代號 = %s"
    val = ("Valley 123", "tw_2")
    
    mycursor.execute(sql, val)
    
    mydb.commit()
    
    print(mycursor.rowcount, "record(s) affected")

news_db()
