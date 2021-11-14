import requests
from bs4 import BeautifulSoup
import mysql.connector

def news_db(News_type,title,url,count):
    
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="ntub-line"
    )

    mycursor = mydb.cursor()
    
    sql = "UPDATE news SET title = %s , url = %s WHERE news_type = %s and passage = %s"
    val = (title,url, News_type,count)
    
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
        news_db("tw",tw_stock_array[title_n],tw_stock_array[url],str(i))
        title_n=title_n+2
        url=url+2
        
def news_headline():#頭條新聞
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
        news_db("headline",tw_stock_array[title_n],tw_stock_array[url],str(i))
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
        news_db("future",tw_stock_array[title_n],tw_stock_array[url],str(i))
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
        news_db("house",tw_stock_array[title_n],tw_stock_array[url],str(i))
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
        news_db("money",tw_stock_array[title_n],tw_stock_array[url],str(i))
        title_n=title_n+2
        url=url+2
        
def news_forex():#外匯新聞
    url = "https://news.cnyes.com/news/cat/forex";
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
        news_db("forex",tw_stock_array[title_n],tw_stock_array[url],str(i))
        title_n=title_n+2
        url=url+2

def search_news_db():
    news_tw_stock()
    news_headline()
    news_house()
    news_future()
    news_money()
    news_forex()


def news_Individual_stocks(stock):#個股新聞-Yahoo
    url = "https://tw.stock.yahoo.com/quote/"+stock+".TW/news";
    tw_stock = requests.get(url)
    tw_stock_1 = BeautifulSoup(tw_stock.text,"html.parser")
    tw_stock_2 = tw_stock_1.find_all(class_ = "Mt(0) Mb(8px)",limit=4)
    counter = 1
    tw_stock_array = []
    for i in tw_stock_2:
        tw_stock_3 = i.find("a")
        Url =  tw_stock_3.get("href")
        Title = tw_stock_3.getText()
        if counter!=2:
            tw_stock_array.append(Title)
            tw_stock_array.append(Url)
        counter=counter+1
    print( tw_stock_array)
    print( tw_stock_array)
    title_n = 0
    url = 1
    for i in range(1,4):
        news_db(stock,tw_stock_array[title_n],tw_stock_array[url],str(i))
        title_n=title_n+2
        url=url+2
        
def news_stock():#個股新聞清單
    stock = ["2317","2330","2377","2379","2383","1101","2002","2603","2610","2015"]
    for i in stock:
        news_Individual_stocks(i)
        
news_stock()
search_news_db()



