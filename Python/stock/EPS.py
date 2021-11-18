import requests
from bs4 import BeautifulSoup
import mysql.connector

def eps_db(tuple_item):
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="ntub-line"
    )

    mycursor = mydb.cursor()
    
    sql = "INSERT INTO eps (years,quarter,stock,eps) VALUES (%s,%s,%s,%s)"
    val = tuple_item
    
    mycursor.execute(sql, val)
    
    mydb.commit()
    
    print(mycursor.rowcount, "record(s) affected")

def EPS(stock):
    r = requests.get("https://tw.stock.yahoo.com/quote/"+str(stock)+".TW/profile") #將網頁資料GET下來
    html = BeautifulSoup(r.text,"html.parser") #將網頁資料以html.parser
    step1 = html.find_all(class_="table-grid row-fit-half")
    count = 0
    for i in step1:
        step2 = i.find_all(class_="grid-item item-span-6 break-mobile")
        for i in step2:
            step3 = i.find_all(class_="D(f) Ai(fs) H(100%) Fz(16px) Bxz(bb) BdB Bdc($bd-primary-divider) Lh(1.5)")
            for i in step3:
                count += 1
                if count==31:
                    date = i.find(class_="As(st) Bxz(bb) Pstart(12px) Py(8px) Bgc(#f5f8fa) C($c-secondary-text) W(30%) Miw(u) Pend(12px) Mend(0)").get_text()
                    quarter = date[-2:]
                    year = date[:4]
                    EPS = i.find(class_="Py(8px) W(70%) Pstart(12px) Bxz(bb)").get_text()[:-2]
                    data_touple = (year,quarter,stock,EPS)
                    eps_db(data_touple)
                elif count==33:
                    date = i.find(class_="As(st) Bxz(bb) Pstart(12px) Py(8px) Bgc(#f5f8fa) C($c-secondary-text) W(30%) Miw(u) Pend(12px) Mend(0)").get_text()
                    quarter = date[-2:]
                    year = date[:4]
                    EPS = i.find(class_="Py(8px) W(70%) Pstart(12px) Bxz(bb)").get_text()[:-2]
                    data_touple = (year,quarter,stock,EPS)
                    eps_db(data_touple)
                elif count==35:
                    date = i.find(class_="As(st) Bxz(bb) Pstart(12px) Py(8px) Bgc(#f5f8fa) C($c-secondary-text) W(30%) Miw(u) Pend(12px) Mend(0)").get_text()
                    quarter = date[-2:]
                    year = date[:4]
                    EPS = i.find(class_="Py(8px) W(70%) Pstart(12px) Bxz(bb)").get_text()[:-2]
                    data_touple = (year,quarter,stock,EPS)
                    eps_db(data_touple)
                elif count==37:
                    date = i.find(class_="As(st) Bxz(bb) Pstart(12px) Py(8px) Bgc(#f5f8fa) C($c-secondary-text) W(30%) Miw(u) Pend(12px) Mend(0)").get_text()
                    quarter = date[-2:]
                    year = date[:4]
                    EPS = i.find(class_="Py(8px) W(70%) Pstart(12px) Bxz(bb)").get_text()[:-2]
                    data_touple = (year,quarter,stock,EPS)
                    eps_db(data_touple)
    
stock_array = [2317,2330,2377,2379,2383,1101,2015,2002,2603,2610]
 
   
for i in stock_array:
    EPS(i)

                
                