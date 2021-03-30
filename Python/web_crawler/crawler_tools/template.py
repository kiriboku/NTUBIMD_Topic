# -*- coding: utf-8 -*-
"""
Created on Tue Mar 23 13:44:15 2021

@author: HAO
"""
import requests
from bs4 import BeautifulSoup
from fake_useragent import UserAgent

ua = UserAgent()#使用假使用者
DATA_URL='要爬蟲網站網址(ex:https://google.com)'#網址【自行更改】
r = requests.get(url=DATA_URL, headers={ 'user-agent': ua.random })#與網頁建立連結
soup = BeautifulSoup(r.text,"html.parser")#將資料轉換為html
#下面兩個選一個用select比較好用
#{
sel = soup.select('所需資料tag(id用【#】;class用【.】)')
'''
ex:
    要找<div>則輸入【div】
    要找<div id='main'>則輸入【div#main】
    要找<div class='testdiv'>則輸入【div.testdiv】
    要找<div>裡的<a>則輸入【div a】
無法搜尋id或class有空格的資料，ex:
    <div id='main div'>輸入【div#main bar】搜尋不到
    <div class='test div'>輸入【div.test bar】搜尋不到
'''
sel = soup.find('所需資料tag(ex:要找<div>則在此輸入div)',class_='所需資料tag的class')#抓取class為【XXX】的div【自行更改】
'''
ex:
    要找<div>則輸入【div】
    要找<div id='main'>則輸入【div,id='main'】
    要找<div class='testdiv'>則輸入【div,class_='testdiv'】
    要找<div>裡的<a>則輸入【div】【.find(a)】
'''
#}
#有關【beautifulSoup】相關資料可以看 https://reurl.cc/0DkVlx
#print(sel)
txt=''#儲存字串
for s in sel:#執行所有<a>
    DATA_URL1='新連結根目錄'+s['href']#根目錄加上超連結【自行更改】
    txt+=DATA_URL1+'\t'+s.text+'\n'#字串串接連杰與標題
txt_out=open('存入資料檔名(ex:test.txt)','w')#開啟檔案【自行更改】
txt_out.write(txt)#寫入檔案
txt_out.close()#關閉檔案