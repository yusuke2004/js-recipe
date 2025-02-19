// button 要素と click イベント
const alertMessage = function() {
    alert("クリックしたね")
  }
  
  alertMessage() // アラートが表示される

const button = document.getElementById("button")

const alertMess = function() {
  alert("クリックしたね")
}

// 関数を登録
button.onclick = alertMess


const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function(e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue

// input 要素と input イベント
