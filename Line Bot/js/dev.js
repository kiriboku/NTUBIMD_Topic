const line = require('@line/bot-sdk');
const config = {
    channelAccessToken: 'qQ8Jy0v3j3pUlOebdVPnNmj7dxOC1Td8sfDIE7PiMnpxceApOWRmWdbP1buzeStt+WeOY+OFyJDqrkLK/DvIC+9vhED7MdqKoZ1D6q+y8WocAqBMqt1SVQX5LZmkVGv3m6j7fX8gW+CPjzPPJ7AdEAdB04t89/1O/w1cDnyilFU=',
    channelSecret: '4dc186c1cecba6df2483e85370fbc0e9'
}
const client = new line.Client(config);
const richmenu = {
    "size": {
        "width": 2500,
        "height": 1686
    },
    "selected": true,
    "name": "Nice richmenu",
    "chatBarText": "點擊開啟選單",
    "areas": [
        // 區塊1：
        {
            "bounds": {
                "x": 160,
                "y": 920,
                "width": 660,
                "height": 600
            },
            "action": {
                "type": "message",
                "label": "區塊1",
                "text": "關注清單"
            }
        },
        // 區塊2：
        {
            "bounds": {
                "x": 820,
                "y": 920,
                "width": 660,
                "height": 600
            },
            "action": {
                "type": "message",
                "label": "區塊2",
                "text": "財務狀況"
            }
        },
        // 區塊3：   
        {
            "bounds": {
                "x": 1480,
                "y": 920,
                "width": 660,
                "height": 600
            },
            "action": {
                "type": "message",
                "label": "區塊3",
                "text": "常見問題"
            }
        },
        //區塊4
        {
            "bounds": {
                "x": 160,
                "y": 320,
                "width": 660,
                "height": 600
            },
            "action": {
                "type": "message",
                "label": "區塊4",
                "text": "查詢股票"
            }
        },
        //區塊5
        {
            "bounds": {
                "x": 820,
                "y": 320,
                "width": 660,
                "height": 600
            },
            "action": {
                "type": "message",
                "label": "區塊5",
                "text": "理財知識"
            }
        },
        //區塊6
        {
            "bounds": {
                "x": 1480,
                "y": 320,
                "width": 660,
                "height": 600
            },
            "action": {
                "type": "message",
                "label": "區塊6",
                "text": "頭條新聞"
            }
        },
        
    ]
}

// client.createRichMenu(richmenu)
//     .then((richMenuId) => console.log(richMenuId))
//     .catch(err => console.error(err))

const richMenuId = "richmenu-77e15993213c452df341d86cdafb75b5"
const fs = require('fs')
client.setRichMenuImage(richMenuId, fs.createReadStream('./richMenu.png'))
    .then(res => console.log(res))
    .catch(err => console.error(err))

client.setDefaultRichMenu(richMenuId)