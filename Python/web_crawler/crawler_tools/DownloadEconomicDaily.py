# -*- coding: utf-8 -*-
"""
Created on Tue Mar 23 13:44:15 2021

@author: HAO
"""
import requests
from bs4 import BeautifulSoup
from fake_useragent import UserAgent
import os
import csv
import datetime
today = datetime.date.today()
def mkdir(path):
    #判斷目錄是否存在
    #存在：True
    #不存在：False
    folder = os.path.exists(path)

    #判斷結果
    if folder:
        #如果目錄已存在，則不建立，提示目錄已存在
        print(path+'目錄已存在')
    else:
        #如果不存在，則建立新目錄
        os.makedirs(path)
        print('-----'+path+'建立成功-----')
def download():
    DATA_URL='https://money.udn.com/money/cate/'
    Page_List={'1':'要聞','2':'產業','3':'國際',
               '4':'兩岸','5':'金融','6':'證券',
               '7':'行情','8':'期貨','9':'理財',
               '10':'房產','11':'觀點'}
    print(Page_List)
    whichpage=input('請輸入代號')
    if whichpage=='1':
        page_code='10846'
    elif whichpage=='2':
        page_code='5591'
    elif whichpage=='3':
        page_code='5588'
    elif whichpage=='4':
        page_code='5589'
    elif whichpage=='5':
        page_code='12017'
    elif whichpage=='6':
        page_code='5590'
    elif whichpage=='7':
        page_code='5594'
    elif whichpage=='8':
        page_code='11111'
    elif whichpage=='9':
        page_code='5592'
    elif whichpage=='10':
        page_code='5593'
    elif whichpage=='11':
        page_code='5595'
    ua = UserAgent()#使用假使用者
    DATA_URL+=page_code
    r = requests.get(url=DATA_URL, headers={ 'user-agent': ua.random })#與網頁建立連結
    soup = BeautifulSoup(r.text,"html.parser")#將資料轉換為html
    #print(soup)
    sel=soup.select('div#mainbar div div dl dt a')#抓取id(id用【#】;class用【.】)為【XXX】的div的div的dl的dt的a【自行更改】
    #有關【beautifulSoup】相關資料可以看 https://reurl.cc/0DkVlx
    #print(sel)
    filename=str(today)+'-'+Page_List[whichpage]+'.csv'
    dirpath='./DownloadEconomicDaily/'+Page_List[whichpage]
    mkdir(dirpath)
    with open(dirpath+'/'+filename,'w') as csvfile:#開啟檔案【自行更改】
        txt_out=csv.writer(csvfile)
        for s in sel:#執行所有<a>
            DATA_URL1='https://money.udn.com'+s['href']#根目錄加上超連結【自行更改】
            txt_out.writerow([[DATA_URL1],[s.text]])#寫入連結與標題
    #print(txt)
    csvfile.close()#關閉檔案