# -*- coding: utf-8 -*-
"""
Created on Tue Mar 23 18:31:33 2021

@author: HAO
"""

'''
若要新增新的爬蟲模板請根據以下步驟執行，
1.按下【Ctrl+N】開啟新的python檔案
2.按下【Crtl+S】將新開啟的檔案存入資料夾【crawler_tools】裡
3.到資料夾【crawler_tools】下的template複製基礎模板
4.將複製的檔案貼到新開啟的python檔案
5.修改複製內容，請記得最後不要有任何會執行程式的code
(若不了解可開啟crawler_tools/DownloadTPEx.Coid.py)
--------------------------------------------------------
使用手冊
1.新增import，請記得加入縮寫以利後續編碼
2.新增代碼在【tools_code】裡(代碼:說明)
3.新增elif在else前
'''

import crawler_tools.DownloadTWSE_Coid as DTWSE
import crawler_tools.DownloadTPEx_Coid as DTPEx
import crawler_tools.DownloadFinancialStatements as DFS
import crawler_tools.DownloadEconomicDaily as DED
tools_code={'1':'下載上市公司資料',
            '2':'下載上櫃公司資料',
            '3':'下載上市櫃公司財報',
            '4':'下載經濟日報連結與標題'}
print(tools_code)
dowhat=input('請輸入操作代號')
if dowhat=='1':
    DTWSE.get_TWSE_coid()
elif dowhat=='2':
    DTPEx.get_TPEx_coid()
elif dowhat=='3':
    DFS.run_getfile()
elif dowhat=='4':
    DED.download()
else:
    print('請輸入正確代號')