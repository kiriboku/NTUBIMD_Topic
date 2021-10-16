import requests
from bs4 import BeautifulSoup
import pymysql
import mysql.connector

def news_db(News_type,title,url):
    
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="line-bot"
    )

    mycursor = mydb.cursor()
    
    sql = "UPDATE news SET 標題 = %s , 網址 = %s WHERE 新聞類型 = %s"
    val = (title,url, News_type)
    
    mycursor.execute(sql, val)
    
    mydb.commit()
    
    print(mycursor.rowcount, "record(s) affected")

def news_tw_stock():#台股新聞
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
    title_n = 0
    url = 1
    for i in range(1,4):
        news_db("tw_"+str(i),tw_stock_array[title_n],tw_stock_array[url])
        title_n=title_n+2
        url=url+2
        
def news_headline():#房產新聞
    url = "https://news.cnyes.com/news/cat/headline";
    tw_stock = requests.get(url)
    tw_stock_1 = BeautifulSoup(tw_stock.text,"html.parser")
    tw_stock_2 = tw_stock_1.find_all(class_ = "_1Zdp",limit = 3)
    tw_stock_array = []
    for i in tw_stock_2:
        tw_stock_array.append(i.get("title"))
        tw_stock_news_url = "https://news.cnyes.com"
        tw_stock_array.append(tw_stock_news_url + i.get("href"))
    print(tw_stock_array)
    title_n = 0
    url = 1
    for i in range(1,4):
        news_db("headline_"+str(i),tw_stock_array[title_n],tw_stock_array[url])
        title_n=title_n+2
        url=url+2

def news_future():#期貨新聞
    url = "https://news.cnyes.com/news/cat/future";
    tw_stock = requests.get(url)
    tw_stock_1 = BeautifulSoup(tw_stock.text,"html.parser")
    tw_stock_2 = tw_stock_1.find_all(class_ = "_1Zdp",limit = 3)
    tw_stock_array = []
    for i in tw_stock_2:
        tw_stock_array.append(i.get("title"))
        tw_stock_news_url = "https://news.cnyes.com"
        tw_stock_array.append(tw_stock_news_url + i.get("href"))
    print(tw_stock_array)
    title_n = 0
    url = 1
    for i in range(1,4):
        news_db("future_"+str(i),tw_stock_array[title_n],tw_stock_array[url])
        title_n=title_n+2
        url=url+2
        
def news_house():#房產新聞
    url = "https://news.cnyes.com/news/cat/cnyeshouse";
    tw_stock = requests.get(url)
    tw_stock_1 = BeautifulSoup(tw_stock.text,"html.parser")
    tw_stock_2 = tw_stock_1.find_all(class_ = "_1Zdp",limit = 3)
    tw_stock_array = []
    for i in tw_stock_2:
        tw_stock_array.append(i.get("title"))
        tw_stock_news_url = "https://news.cnyes.com"
        tw_stock_array.append(tw_stock_news_url + i.get("href"))
    print(tw_stock_array)
    title_n = 0
    url = 1
    for i in range(1,4):
        news_db("house_"+str(i),tw_stock_array[title_n],tw_stock_array[url])
        title_n=title_n+2
        url=url+2
        
def news_money():#理財新聞
    url = "https://news.cnyes.com/news/cat/tw_money";
    tw_stock = requests.get(url)
    tw_stock_1 = BeautifulSoup(tw_stock.text,"html.parser")
    tw_stock_2 = tw_stock_1.find_all(class_ = "_1Zdp",limit = 3)
    tw_stock_array = []
    for i in tw_stock_2:
        tw_stock_array.append(i.get("title"))
        tw_stock_news_url = "https://news.cnyes.com"
        tw_stock_array.append(tw_stock_news_url + i.get("href"))
    print(tw_stock_array)
    title_n = 0
    url = 1
    for i in range(1,4):
        news_db("money_"+str(i),tw_stock_array[title_n],tw_stock_array[url])
        title_n=title_n+2
        url=url+2

def search_news_db():
    news_tw_stock()
    news_headline()
    news_house()
    news_future()
    news_money()
    
search_news_db()
