
// Promise function 建構式

function oneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // 一秒後回傳資料
            resolve('one second')
        }, 1000);//非同步執行的程式碼
    })
}

function twoSecond() {
    return new Promise((resolve) => {
        twoTimeout(() => {
            // 兩秒後回傳資料
            resolve('two second')
        }, 2000);//非同步執行的程式碼
    })
}

// 等到兩個 Promise 都成功回傳後，才執行接下去的流程
Promise.all([oneSecond, twoSecond])
  .then(([oneSecond, twoSecond]) => {
    console.log(oneSecond, twoSecond)
  })

// 