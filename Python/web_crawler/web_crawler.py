# -*- coding: utf-8 -*-
'''
Created on Tue Mar 16 15:34:00 2021

@author: HAO
'''
#下載檔案
from six.moves import urllib
import requests
from bs4 import BeautifulSoup 
import os
import time
import random
from fake_useragent import UserAgent

ua = UserAgent()
#response = requests.get(url="https://google.com", headers={ 'user-agent': ua.random })

#print(response)

failtimes=0#下載檔案失敗次數
sleeptime=10
faillist=[]

def clearheader(DATA_URL):
    usera=ua.random
    try:
        r = requests.get(url=DATA_URL, headers={ 'user-agent': usera })
    except:
        print('block')
        #clearheader(DATA_URL)

def sleeptimer(sleeptime,DATA_URL,flag):#等待計時器
    for sle in range(sleeptime):
        time.sleep(1)
        print('已等待%d/%d秒'%(sle+1,sleeptime))
        if not flag :
            clearheader(DATA_URL)
    print('')

def download(DATA_URL,filepath,filename):
    global failtimes
    print()
    print('正在下載 %s (重新下載第%d次\n)'%(filename,failtimes))
    try:
        filepath, _ = urllib.request.urlretrieve(DATA_URL, filepath)
        print('檔案下載成功')
        failtimes=0
        ret=1
    except:
        failtimes+=1
        if failtimes>10:
            print(faillist)
            failtimes=0
            ret=0
        else:
            failwaitsec=random.randint(sleeptime,(sleeptime*6))
            print('檔案下載失敗，%d秒後嘗試重新下載第%d次'%(failwaitsec,failtimes))
            sleeptimer(failwaitsec,DATA_URL,0)
            ret=download(DATA_URL,filepath,filename)
    return ret

def get_href(DATA_URL):
    try:
        r = requests.get(url=DATA_URL, headers={ 'user-agent': ua.random })
        soup = BeautifulSoup(r.text,"html.parser")
        sel = soup.select('font')
        print('font num:%d'%(len(sel)))
        if len(sel)==2:
            return 0
        sel = soup.select(" a")
        print('a num:%d'%(len(sel)))
        if len(sel)==0:
            return 0
        for s in sel:
            DATA_URL = 'https://doc.twse.com.tw/'+s['href']
        return DATA_URL
    except:
        return get_href(DATA_URL)

def run_getfail(fll):
    for faillistindex in range(fll):
        f_list=faillist.pop(0)
        get_files(f_list[0],f_list[1],f_list[2])
    fll=len(faillist)
    if fll!=0:
        run_getfail(fll)

def get_files(Yval,Qval,idval):
    DATA_DIR = './'+idval
    filecodelist=['_A01','_A02','_AI1','_AI3']
    filetypelist=['.zip','.pdf','.wdl']
    for filecodeindex in range(len(filecodelist)):
        for filetypeindex in filetypelist:
            filename = Yval+Qval+'_'+idval+filecodelist[filecodeindex]+filetypeindex
            DATA_URL = 'https://doc.twse.com.tw/server-java/t57sb01?co_id='+idval+'&colorchg=1&kind=A&step=9&filename='+filename
            filepath = os.path.join(DATA_DIR, filename)
            print('嘗試下載%s'%(filename))
            if filetypeindex!=filetypelist[0]:#除了zip檔都要查詢下載連結
                href=get_href(DATA_URL)
                if href!=0:
                    DATA_URL=href
                else:
                    print('----無檔案----\n等待%d秒，下載新檔案'%(sleeptime))
                    sleeptimer(sleeptime,DATA_URL,1)
                    continue
            else:
                DATA_DIR = DATA_DIR
            if download(DATA_URL,filepath,filename):#執行下載動作
                print('等待%d秒，偵測檔案容量大小'%(sleeptime))
                sleeptimer(sleeptime,DATA_URL,1)
                #偵測檔案容量大小
                try:
                    size = os.path.getsize(DATA_DIR+'/'+filename)
                    if size<2222:
                        print('%s 檔案容量過小\n推斷為無資料，已自動刪除檔案'%(filename))
                        os.remove(DATA_DIR+'/'+filename)
                    else:
                        print('%s 有資料'%(filename))
                except:
                    DATA_DIR=DATA_DIR
                fll=len(faillist)
                if fll:
                    print(fll,faillist)
                    run_getfail(fll)
            else:
                faillist.append([Yval,Qval,idval])
            print('---------\n等待%d秒，下載新檔案'%(sleeptime))
            sleeptimer(sleeptime,DATA_URL,1)


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
        print('-----建立成功-----')

yearlist=['1998','1999','2000','2001',
         '2002','2003','2004','2005',
         '2006','2007','2008','2009',
         '2010','2011','2012','2013',
         '2014','2015','2016','2017',
         '2018','2019','2020']
quarterlist=['01','02','03','04']
coidfilelist=['TWSE_coid.txt','TPEx_coid.txt']
coidlist=[]

def run_getfile():
    for coidfileindex in range(len(coidfilelist)):
        readcoidfile=open(coidfilelist[coidfileindex],'r+')
        for line in readcoidfile.readlines():#以行讀取所有資料  
            line = line.strip()#去掉每行頭尾空白  
            coidlist.append(line[:4])#取股號
            # 关闭文件
        readcoidfile.close()

    for coidindex in range(len(coidlist)):#跑過所有的股號
        mkdir('./'+coidlist[coidindex])
        for yearindex in range(len(yearlist)):#跑過每一年
            for quarterindex in range(len(quarterlist)):#跑過每一季
                get_files(yearlist[yearindex],quarterlist[quarterindex],coidlist[coidindex])
    run_getfail()

#查詢上市代號
def get_TWSE_coid():
    r = requests.get('https://isin.twse.com.tw/isin/class_main.jsp?owncode=&stockname=&isincode=&market=1&issuetype=1&industry_code=&Page=1&chklike=Y') #將此頁面的HTML GET下來
    #print(r.text) #印出HTML
    soup = BeautifulSoup(r.text,'html.parser') #將網頁資料以html.parser
    sel = soup.select('table tr') #取HTML標中的 <div class='title'></div> 中的<a>標籤存入sel
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
        #print(txt)
    txt_out = open('TWSE_coid.txt','w')
    txt_out.write(txt)
    txt_out.close()


#查詢上櫃代號
def get_TPEx_coid():
    r = requests.get('https://isin.twse.com.tw/isin/class_main.jsp?owncode=&stockname=&isincode=&market=2&issuetype=4&industry_code=&Page=1&chklike=Y') #將此頁面的HTML GET下來
    #print(r.text) #印出HTML
    soup = BeautifulSoup(r.text,'html.parser') #將網頁資料以html.parser
    sel = soup.select('table tr') #取HTML標中的 <div class='title'></div> 中的<a>標籤存入sel
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
        #print(txt)
    txt_out = open('TPEx_coid.txt','w')
    txt_out.write(txt)
    txt_out.close()

sc=eval(input('請輸入執行工作代號\n1:抓上市股票資料\n2:抓上櫃股票資料\n3:抓股票財報\n'))
if sc==1:
    get_TWSE_coid()
elif sc==2:
    get_TPEx_coid()
elif sc==3:
    run_getfile()