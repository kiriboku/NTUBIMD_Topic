const { get } = require('http');
let index = require('./index');
let index2 = require('./index2');

// Promise.all([index2.list(2330)])
//   .then(([Promise]) => {
//     var x = Promise
//     console.log(x)
//   })

Promise.all([index.show_follow(23670424)])
  .then(([oneSecond]) => {
    x = oneSecond
    for (var i = 0; i < x.length-1; i++) {
      y = x[i]
      Promise.all([index2.list(y)])
        .then(([Promise]) => {
          console.log(Promise)
        })
    }
  })







