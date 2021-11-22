import requests
from bs4 import BeautifulSoup
import mysql.connector

def Debts_ratio_old_bd(tuple_item):#歷年負債佔資產比>存入資料庫
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="ntub-line"
    )

    mycursor = mydb.cursor()
    
    sql = "INSERT INTO test1 (years,quarter,stock,debts_ratio) VALUES (%s,%s,%s,%s)"
    val = tuple_item
    
    mycursor.execute(sql, val)
    
    mydb.commit()
    
    print(mycursor.rowcount, "record(s) affected")

def Debts_ratio_old(stock):# 爬取歷年負債佔資產比
    url="https://histock.tw/stock/"+str(stock)+"/%E8%B2%A0%E5%82%B5%E4%BD%94%E8%B3%87%E7%94%A2%E6%AF%94"
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
                Debts_ratio_old_bd(tuple(array))
            else:
                count+=1

def Debts_ratio_new(stock):# 爬取最新負債佔資產比
    url="https://histock.tw/stock/"+str(stock)+"/%E8%B2%A0%E5%82%B5%E4%BD%94%E8%B3%87%E7%94%A2%E6%AF%94"
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
                return array
            else:
                count+=1

def Long_term_founds_old_bd(tuple_item):#歷年長期資金站固定資產比>存入資料庫
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="ntub-line"
    )

    mycursor = mydb.cursor()
    
    sql = "INSERT INTO test2 (years,quarter,stock,long_term_founds) VALUES (%s,%s,%s,%s)"
    val = tuple_item
    
    mycursor.execute(sql, val)
    
    mydb.commit()
    
    print(mycursor.rowcount, "record(s) affected")
    
def Long_term_founds_old(stock):# 爬取歷年長期資金站固定資產比
    url="https://histock.tw/stock/"+str(stock)+"/%E9%95%B7%E6%9C%9F%E8%B3%87%E9%87%91%E4%BD%94%E5%9B%BA%E5%AE%9A%E8%B3%87%E7%94%A2%E6%AF%94"
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
                Long_term_founds_old_bd(tuple(array))
            else:
                count+=1
                
def Long_term_founds_new(stock):# 爬取最新長期資金站固定資產比
    url="https://histock.tw/stock/"+str(stock)+"/%E9%95%B7%E6%9C%9F%E8%B3%87%E9%87%91%E4%BD%94%E5%9B%BA%E5%AE%9A%E8%B3%87%E7%94%A2%E6%AF%94"
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
                return array
            else:
                count+=1

def current_and_quick_ratio_old_bd(tuple_item):#歷年流速動比>存入資料庫
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="ntub-line"
    )

    mycursor = mydb.cursor()
    
    sql = "INSERT INTO test3 (years,quarter,stock,current_ratio,quick_ratio) VALUES (%s,%s,%s,%s,%s)"
    val = tuple_item
    
    mycursor.execute(sql, val)
    
    mydb.commit()
    
    print(mycursor.rowcount, "record(s) affected")
                
def current_and_quick_ratio_old(stock):# 爬取歷年流速動比
    url="https://histock.tw/stock/"+str(stock)+"/%E6%B5%81%E9%80%9F%E5%8B%95%E6%AF%94%E7%8E%87"
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
                current_and_quick_ratio_old_bd(tuple(array))
            else:
                count+=1

def current_and_quick_ratio_new(stock):# 爬取最新流速動比
    url="https://histock.tw/stock/"+str(stock)+"/%E6%B5%81%E9%80%9F%E5%8B%95%E6%AF%94%E7%8E%87"
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
                return array
            else:
                count+=1

def interest_guarantee_old_bd(tuple_item):#歷年利息保障倍數>存入資料庫
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="ntub-line"
    )

    mycursor = mydb.cursor()
    
    sql = "INSERT INTO test4 (years,quarter,stock,interest_guarantee) VALUES (%s,%s,%s,%s)"
    val = tuple_item
    
    mycursor.execute(sql, val)
    
    mydb.commit()
    
    print(mycursor.rowcount, "record(s) affected")
                
def interest_guarantee_old(stock):# 爬取歷年利息保障倍數
    url="https://histock.tw/stock/"+str(stock)+"/%E5%88%A9%E6%81%AF%E4%BF%9D%E9%9A%9C%E5%80%8D%E6%95%B8"
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
                        array.append(i.get_text().replace(",",""))
                interest_guarantee_old_bd(tuple(array))
            else:
                count+=1
                
def interest_guarantee_new(stock):# 爬取最新利息保障倍數
    url="https://histock.tw/stock/"+str(stock)+"/%E5%88%A9%E6%81%AF%E4%BF%9D%E9%9A%9C%E5%80%8D%E6%95%B8"
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
                        array.append(i.get_text().replace(",",""))
                return array
            else:
                count+=1

def finance_security_bd(tuple_item):#財務安全 項目:年、季度、股票代號、debts_ratio(負債佔資產比)、long_term_founds(長期資金佔固定資產比)、current_ratio&quick_ratio(流速動比)、interest_guarantee(最新利息保障倍數)
    mydb = mysql.connector.connect(
      host="127.0.0.1",
      user="root",
      password="C23670424989",
      database="ntub-line"
    )

    mycursor = mydb.cursor()
    
    sql = "INSERT INTO finance_security (years,quarter,stock,debts_ratio,long_term_founds,current_ratio,quick_ratio,interest_guarantee) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)"
    val = tuple_item
    
    mycursor.execute(sql, val)
    
    mydb.commit()
    
    print(mycursor.rowcount, "record(s) affected")

def finance_security():#爬取最新財務安全資料並存入資料庫
    stock_array = [2317,2330,2377,2379,2383,1101,2015,2002,2603,2610]
    for i in stock_array:
        array = []
        array.extend(Debts_ratio_new(i))
        array.extend(Long_term_founds_new(i))
        array.extend(current_and_quick_ratio_new(i))
        array.extend(interest_guarantee_new(i))
        finance_security_bd(tuple(array))
 
finance_security()


