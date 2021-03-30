# -*- coding: utf-8 -*-
'''
Created on Tue Mar 16 15:34:00 2021

@author: HAO
'''
#下載檔案
import requests
from bs4 import BeautifulSoup 
import os
#新增資料夾
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
#查詢上櫃代號
def get_TPEx_coid():
    try:
        r = requests.get('https://isin.twse.com.tw/isin/class_main.jsp?owncode=&stockname=&isincode=&market=2&issuetype=4&industry_code=&Page=1&chklike=Y')
        soup = BeautifulSoup(r.text,'html.parser')
        sel = soup.select('table tr')
        txt=''
        for s in (sel):
            val=s.select('td')
            if s!=sel[0]:
                for i in val:
                    if i==val[2]:
                        txt+=i.text+'\t'
                    elif i==val[3]:
                        txt+=i.text+'\t'
                    elif i==val[4]:
                        txt+=i.text+'\t'
                    elif i==val[5]:
                        txt+=i.text+'\t'
                    elif i==val[7]:
                        txt+=i.text+'\n'
        mkdir('.\coid')
        txt_out = open('.\coid\TPEx.txt','w')
        txt_out.write(txt)
        txt_out.close()
        print('下載完成')
    except:
        get_TPEx_coid()

#get_TPEx_coid()