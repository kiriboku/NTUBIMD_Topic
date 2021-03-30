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
failtimes=0#下載檔案失敗次數
sleeptime=10#等待秒數
faillist=[]#下載失敗列表

def clearheader(DATA_URL):#洗header
    usera=ua.random
    try:
        r = requests.get(url=DATA_URL, headers={ 'user-agent': usera })#執行洗header
    except:
        print('block')#失敗回報

def sleeptimer(sleeptime,DATA_URL,flag):#等待計時器(等待時間,網頁連結,洗header判定資料)
    for sle in range(sleeptime):
        time.sleep(1)
        print('已等待%d/%d秒'%(sle+1,sleeptime))
        #判定是否執行洗header
        #0執行
        #1不執行
        if not flag :
            clearheader(DATA_URL)
    print('')

def download(DATA_URL,filepath,filename):#下載資料(下載網址,存檔位址,存檔檔名)
    global failtimes
    print()
    print('正在下載 %s (重新下載第%d次\n)'%(filename,failtimes))
    try:
        filepath, _ = urllib.request.urlretrieve(DATA_URL, filepath)#執行下載
        print('檔案下載成功')
        failtimes=0#重製失敗次數
        ret=1
    except:
        failtimes+=1#失敗次數+1
        if failtimes>10:
            print(faillist)
            failtimes=0
            ret=0
        else:
            failwaitsec=random.randint(sleeptime,(sleeptime*6))
            print('檔案下載失敗，%d秒後嘗試重新下載第%d次'%(failwaitsec,failtimes))
            sleeptimer(failwaitsec,DATA_URL,0)#休息一下並執行洗header
            ret=download(DATA_URL,filepath,filename)#重新執行下載
    return ret#回傳是否下載成功

def get_href(DATA_URL):#進一步查詢下載連結
    try:
        r = requests.get(url=DATA_URL, headers={ 'user-agent': ua.random })#建立連結
        soup = BeautifulSoup(r.text,"html.parser")#轉換為html
        sel = soup.select("a")#擷取<a>
        print('a num:%d'%(len(sel)))
        #判定是否有連結
        #若無連結則回傳0
        if len(sel)==0:
            return 0
        #擷取連結並回傳
        for s in sel:
            DATA_URL = 'https://doc.twse.com.tw/'+s['href']
        return DATA_URL
    except:
        return get_href(DATA_URL)#遭server阻擋則重新連線

def run_getfail(fll):#將下載失敗列表重新下載(下載失敗列表數量)
    for faillistindex in range(fll):
        f_list=faillist.pop(0)#取出列表第一項
        get_files(f_list[0],f_list[1],f_list[2],f_list[3])#重新下載下載失敗檔案
    fll=len(faillist)#下載失敗列表項目數
    if fll!=0:#若有資料則執行重新下載
        run_getfail(fll)

def get_files(Yval,Qval,levelval,idval):#下載檔案(西元年,季度,上市櫃,公司代號)
    DATA_DIR = '.\FinancialStatements/'+levelval+'/'+idval#下載存放資料夾
    filecodelist=['_A01','_A02','_AI1','_AI3']#公開資訊站檔案代號列表
    filetypelist=['.zip','.pdf','.wdl']#存檔副檔名列表
    for filecodeindex in range(len(filecodelist)):
        for filetypeindex in filetypelist:#執行每一種排列組合
            filename = Yval+Qval+'_'+idval+filecodelist[filecodeindex]+filetypeindex#檔名串接
            DATA_URL = 'https://doc.twse.com.tw/server-java/t57sb01?co_id='+idval+'&colorchg=1&kind=A&step=9&filename='+filename#連線網址
            filepath = os.path.join(DATA_DIR, filename)#串接存檔位址與檔名
            print('嘗試下載%s'%(filename))
            if filetypeindex!=filetypelist[0]:#除了zip檔都要進一步查詢下載連結
                href=get_href(DATA_URL)#取得新連結
                #若有新連結則更新連結，否則下載新檔案
                if href!=0:
                    DATA_URL=href#更新連結
                else:
                    print('----無檔案----\n等待%d秒，下載新檔案'%(sleeptime))
                    sleeptimer(sleeptime,DATA_URL,1)#下載新檔案前先休息一下
                    continue#跳轉至下一迴圈不執行下面程式
            else:
                DATA_URL = DATA_URL#不變更檔案連結
            if download(DATA_URL,filepath,filename):#執行下載動作
                print('等待%d秒，偵測檔案容量大小'%(sleeptime))
                sleeptimer(sleeptime,DATA_URL,1)
                try:
                    size = os.path.getsize(DATA_DIR+'/'+filename)#偵測檔案容量大小
                    if size<2222:#判斷資料的檔案容量大小
                        print('%s 檔案容量過小\n推斷為無資料，已自動刪除檔案'%(filename))
                        os.remove(filepath)#刪除檔案
                    else:
                        print('%s 有資料'%(filename))
                except:
                    DATA_DIR=DATA_DIR
                fll=len(faillist)#下載失敗列表項目數
                if fll:#數量大於0則執行重新下載
                    print(fll,faillist)
                    run_getfail(fll)
            else:
                faillist.append([Yval,Qval,levelval,idval])#下載失敗則將下在失敗資料加入下載失敗列表
            print('---------\n等待%d秒，下載新檔案'%(sleeptime))
            sleeptimer(sleeptime,DATA_URL,1)#休息一下


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

yearlist=['1998','1999','2000','2001',
         '2002','2003','2004','2005',
         '2006','2007','2008','2009',
         '2010','2011','2012','2013',
         '2014','2015','2016','2017',
         '2018','2019','2020']
quarterlist=['01','02','03','04']
coidfilelist=['.\coid\TWSE.txt','.\coid\TPEx.txt']
TWSE_coidlist=[]
TPEx_coidlist=[]
coidlistlist=['TWSE','TPEx']
def read_coidfile():
    for coidfileindex in range(len(coidfilelist)):
        mkdir('.\FinancialStatements/'+coidlistlist[coidfileindex])
        readcoidfile=open(coidfilelist[coidfileindex],'r+')
        for line in readcoidfile.readlines():#以行讀取所有資料  
            line = line.strip()#去掉每行頭尾空白  
            if coidfilelist[coidfileindex]=='.\coid\TWSE.txt':
                TWSE_coidlist.append(line[:4])#取股號
            else:
                TPEx_coidlist.append(line[:4])
            # 关闭文件
        readcoidfile.close()
    
def run_getfile():
    mkdir('.\FinancialStatements')
    read_coidfile()
    
    for coidlistindex in coidlistlist:#跑上市櫃
        if coidlistindex=='TWSE':
            whitchcoidlist=TWSE_coidlist#抓取上市代號
        elif coidlistindex=='TPEx':
            whitchcoidlist=TPEx_coidlist#抓取上櫃代號
        for coidindex in range(len(whitchcoidlist)):#跑過所有的股號
            mkdir('.\FinancialStatements/'+coidlistindex+'/'+whitchcoidlist[coidindex])#建立資料夾
            for yearindex in range(len(yearlist)):#跑過每一年
                for quarterindex in range(len(quarterlist)):#跑過每一季
                    get_files(yearlist[yearindex],quarterlist[quarterindex],coidlistindex,whitchcoidlist[coidindex])#下載檔案
    run_getfail()#執行重新下載
#run_getfile()