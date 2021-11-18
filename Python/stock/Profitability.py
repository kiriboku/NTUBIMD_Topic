import requests
from bs4 import BeautifulSoup
import mysql.connector


def Profitability_db(tuple_item):
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="ntub-line"
    )

    mycursor = mydb.cursor()
    
    sql = "INSERT INTO profitability (years,quarter,stock,gpm,roa,opm,roe,pbt,pb) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    val = tuple_item
    
    mycursor.execute(sql, val)
    
    mydb.commit()
    
    print(mycursor.rowcount, "record(s) affected")

def Profitability(stock):
    r = requests.get("https://tw.stock.yahoo.com/quote/"+str(stock)+".TW/profile") #將網頁資料GET下來
    html = BeautifulSoup(r.text,"html.parser") #將網頁資料以html.parser
    step1 = html.find_all(class_="table-grid row-fit-half")
    count = 0
    data_tuple = ()
    data_tuple+=("2021",)
    data_tuple+=("Q3",)
    data_tuple+=(str(stock),)
    for i in step1:
        step2 = i.find_all(class_="grid-item item-span-6 break-mobile")
        for i in step2:
            step3 = i.find_all(class_="D(f) Ai(fs) H(100%) Fz(16px) Bxz(bb) BdB Bdc($bd-primary-divider) Lh(1.5)")
            for i in step3:
                if count==24:
                    key = i.find("span",class_="As(st) Bxz(bb) Pstart(12px) Py(8px) Bgc(#f5f8fa) C($c-secondary-text) W(30%) Miw(u) Pend(12px) Mend(0)").get_text()
                    value = i.find(class_="Py(8px) W(70%) Pstart(12px) Bxz(bb)").get_text()[:-1]
                    data_tuple+=(value,)
                if count==25:
                    key = i.find("span",class_="As(st) Bxz(bb) Pstart(12px) Py(8px) Bgc(#f5f8fa) C($c-secondary-text) W(30%) Miw(u) Pend(12px) Mend(0)").get_text()
                    value = i.find(class_="Py(8px) W(70%) Pstart(12px) Bxz(bb)").get_text()[:-1]
                    data_tuple+=(value,)
                if count==26:
                    key = i.find("span",class_="As(st) Bxz(bb) Pstart(12px) Py(8px) Bgc(#f5f8fa) C($c-secondary-text) W(30%) Miw(u) Pend(12px) Mend(0)").get_text()
                    value = i.find(class_="Py(8px) W(70%) Pstart(12px) Bxz(bb)").get_text()[:-1]
                    data_tuple+=(value,)
                if count==27:
                    key = i.find("span",class_="As(st) Bxz(bb) Pstart(12px) Py(8px) Bgc(#f5f8fa) C($c-secondary-text) W(30%) Miw(u) Pend(12px) Mend(0)").get_text()
                    value = i.find(class_="Py(8px) W(70%) Pstart(12px) Bxz(bb)").get_text()[:-1]
                    data_tuple+=(value,)
                if count==28:
                    key = i.find("span",class_="As(st) Bxz(bb) Pstart(12px) Py(8px) Bgc(#f5f8fa) C($c-secondary-text) W(30%) Miw(u) Pend(12px) Mend(0)").get_text()
                    value = i.find(class_="Py(8px) W(70%) Pstart(12px) Bxz(bb)").get_text()[:-1]
                    data_tuple+=(value,)
                if count==29:
                    key = i.find("span",class_="As(st) Bxz(bb) Pstart(12px) Py(8px) Bgc(#f5f8fa) C($c-secondary-text) W(30%) Miw(u) Pend(12px) Mend(0)").get_text()
                    value = i.find(class_="Py(8px) W(70%) Pstart(12px) Bxz(bb)").get_text()[:-2]
                    data_tuple+=(value,)
                count+=1 
    Profitability_db(data_tuple)
    




stock_array = [2317,2330,2377,2379,2383,1101,2015,2002,2603,2610]
 
    
for i in stock_array:
    Profitability(i)