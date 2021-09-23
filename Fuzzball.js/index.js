const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')
const text3 = document.getElementById('text3')
const conform = document.getElementById('conform')
const reset = document.getElementById('reset')
const textroom = document.getElementById("txstroom")

conform.addEventListener('click', function () {
        console.log(text1.value)
        console.log(text2.value)
})

reset.addEventListener('click', function () {
        text1.value = ""
        text2.value = ""
})
