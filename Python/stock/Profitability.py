import requests
from bs4 import BeautifulSoup
import mysql.connector

def Profit_ratio_bd(tuple_item):#利潤比例，項目:年、季度、股票代號、gpm(毛利率)、opm(營業利益率)、pbt(稅前淨利率)、pat(稅後淨利率)存入資料庫
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="ntub-line"
    )

    mycursor = mydb.cursor()
    
    sql = "INSERT INTO test1 (years,quarter,stock,gpm,opm,pbt,pat) VALUES (%s,%s,%s,%s,%s,%s,%s)"
    val = tuple_item
    
    mycursor.execute(sql, val)
    
    mydb.commit()
    
    print(mycursor.rowcount, "record(s) affected")

def Rate_of_return_bd(tuple_item):#報酬率，項目:年、季度、股票代號、roe(股東權益報酬率)、roa(資產報酬率)存入資料庫
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="ntub-line"
    )

    mycursor = mydb.cursor()
    
    sql = "INSERT INTO test2 (years,quarter,stock,roe,roa) VALUES (%s,%s,%s,%s,%s)"
    val = tuple_item
    
    mycursor.execute(sql, val)
    
    mydb.commit()
    
    print(mycursor.rowcount, "record(s) affected")

def profitability_bd(tuple_item):#報酬率，項目:年、季度、股票代號、roe(股東權益報酬率)、roa(資產報酬率)存入資料庫
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="ntub-line"
    )

    mycursor = mydb.cursor()
    
    sql = "INSERT INTO profitability (years,quarter,stock,gpm,opm,pbt,pat,roe,roa) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    val = tuple_item
    
    mycursor.execute(sql, val)
    
    mydb.commit()
    
    print(mycursor.rowcount, "record(s) affected")


def Profit_ratio_old(stock):# 爬取歷年利潤比例 項目:年、季度、股票代號、gpm(毛利率)、opm(營業利益率)、pbt(稅前淨利率)、pat(稅後淨利率)
    url="https://histock.tw/stock/"+str(stock)+"/%E5%88%A9%E6%BD%A4%E6%AF%94%E7%8E%87"
    r=requests.get(url)
    soup = BeautifulSoup(r.text,"html.parser")
    soups = soup.find_all(class_="tb-stock tbBasic")
    count = 0
    for i in soups:
        step1 = i.find_all('tr')
        for i in step1:
            array = []
            step2 = i.find_all('td')
            if count !=0:
                array = []
                count1 = 0
                for i in step2:
                    if count1 == 0:
                        array.append(i.get_text()[:4])
                        array.append(i.get_text()[-2:])
                        array.append(stock)
                        count1+=1
                    else:
                        array.append(i.get_text().replace("%",""))
                        count1+=1
                Profit_ratio_bd(tuple(array))
            else:
                count+=1

def Rate_of_return_old(stock):# 爬取歷年報酬率，項目:年、季度、股票代號、roe(股東權益報酬率)、roa(資產報酬率)存入資料庫
    url="https://histock.tw/stock/"+str(stock)+"/%E5%A0%B1%E9%85%AC%E7%8E%87"
    r=requests.get(url)
    soup = BeautifulSoup(r.text,"html.parser")
    soups = soup.find_all(class_="tb-stock tbBasic")
    count = 0
    for i in soups:
        step1 = i.find_all('tr')
        for i in step1:
            array = []
            step2 = i.find_all('td')
            if count !=0:
                array = []
                count1 = 0
                for i in step2:
                    if count1 == 0:
                        array.append(i.get_text()[:4])
                        array.append(i.get_text()[-2:])
                        array.append(stock)
                        count1+=1
                    else:
                        array.append(i.get_text().replace("%",""))
                        count1+=1
                Rate_of_return_bd(tuple(array))
            else:
                count+=1

def Profit_ratio_new(stock):# 爬取最新利潤比例 項目:年、季度、股票代號、gpm(毛利率)、opm(營業利益率)、pbt(稅前淨利率)、pat(稅後淨利率)
    url="https://histock.tw/stock/"+str(stock)+"/%E5%88%A9%E6%BD%A4%E6%AF%94%E7%8E%87"
    r=requests.get(url)
    soup = BeautifulSoup(r.text,"html.parser")
    soups = soup.find_all(class_="tb-stock tbBasic")
    count = 0
    for i in soups:
        step1 = i.find_all('tr',limit=2)
        for i in step1:
            array = []
            step2 = i.find_all('td')
            if count !=0:
                array = []
                count1 = 0
                for i in step2:
                    if count1 == 0:
                        array.append(i.get_text()[:4])
                        array.append(i.get_text()[-2:])
                        array.append(stock)
                        count1+=1
                    else:
                        array.append(i.get_text().replace("%",""))
                        count1+=1
                return(array)
            else:
                count+=1

def Rate_of_return_new(stock):# 爬取最新報酬率、ROE(股東權益報酬率)、ROA(資產報酬率)
    url="https://histock.tw/stock/"+str(stock)+"/%E5%A0%B1%E9%85%AC%E7%8E%87"
    r=requests.get(url)
    soup = BeautifulSoup(r.text,"html.parser")
    soups = soup.find_all(class_="tb-stock tbBasic")
    count = 0
    for i in soups:
        step1 = i.find_all('tr',limit=2)
        for i in step1:
            array = []
            step2 = i.find_all('td')
            if count !=0:
                array = []
                count1 = 0
                for i in step2:
                    if count1 == 0:
                        count1+=1
                    else:
                        array.append(i.get_text().replace("%",""))
                        count1+=1
                return(array)
            else:
                count+=1

def profitability_bd(tuple_item):#利潤比例，項目:年、季度、股票代號、gpm(毛利率)、opm(營業利益率)、pbt(稅前淨利率)、pat(稅後淨利率)存入資料庫
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="ntub-line"
    )

    mycursor = mydb.cursor()
    
    sql = "INSERT INTO test1 (years,quarter,stock,gpm,opm,pbt,pat) VALUES (%s,%s,%s,%s,%s,%s,%s)"
    val = tuple_item
    
    mycursor.execute(sql, val)
    
    mydb.commit()
    
    print(mycursor.rowcount, "record(s) affected")

def profitability():#爬取最新獲利能力資料並存入資料庫
    stock_array = [2317,2330,2377,2379,2383,1101,2015,2002,2603,2610]
    for i in stock_array:
        array=[]
        array.extend(Profit_ratio_new(i))
        array.extend(Rate_of_return_new(i))
        profitability_bd(tuple(array))


profitability()

