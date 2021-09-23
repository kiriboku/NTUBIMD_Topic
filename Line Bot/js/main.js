const { get } = require('http');
let index = require('./index');
let index2 = require('./index2');

// Promise.all([index2.list(2330)])
//   .then(([Promise]) => {
//     var x = Promise
//     console.log(x)
//   })

var userid = "U8c66bf0ddf1af50d218f02a6f7578c77"

// Promise.all([index.show_follow(userid)])
//   .then(([oneSecond]) => {
//     var m = ""
//     var x = oneSecond
//     var i = 0
//     while (i < x.length) {
//       y = x[i]
//       i = i + 1
//       Promise.all([index2.list(y)])
//         .then(([twoSecond]) => {
//           m = m + "\n" + twoSecond
//         })
//     }
//   })
var t = ""

Promise.all([index.show_follow(userid)])
  .then(([oneSecond]) => {
    oneSecond.forEach(element => Promise.all([index2.list(element)])
      .then(([oneSecond]) => {
        t = t + "\n" + oneSecond
      }));
  })

setTimeout(() => {
    // 三秒後回傳資料
    console.log(t)
}, 5000);

// Promise.all([index2.list(2330)])
//   .then(([oneSecond]) => {
//     console.log(oneSecond)
//   })

async function SB0(userid) {
  var oneSecond = await index.show_follow(userid);
  SB1(oneSecond)
}

async function SB2(stock) {
  var oneSecond = await index2.list(stock)
  return oneSecond
}

async function SB1(array) {
  var mess = ""
  for (var i = 0; i < array.length; i++) {
    y = array[i]
    const data1 = await SB2(y)
    mess = mess + "\n" + data1
  }
  return (mess)
}

// setTimeout(() => {
//     // 三秒後回傳資料
//     console.log(time)
// }, 3000);

// let array = [2330, 1101, 1102]
// var data = SB2(2330)

// setTimeout(() => {
//     // 三秒後回傳資料
//     console.log(data)
// }, 3000);





















