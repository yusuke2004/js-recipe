const display = document.getElementById("display");
const button = document.getElementById("button");
const resetButton = document.getElementById("reset-button");

let count = 0;

const countUp = function() {
  // count を更新
  count += 1
  // count を秒単位にして表示
  display.textContent = count / 100
};

let id = null;

button.onclick = function() {
  if (id === null) {
    // start
    // 10ms ごとに countUp を実行するように登録する
    id = setInterval(countUp, 10);
    //setInterval(関数, 間隔) 間隔の単位は1000分の1秒（＝ ms ）
    button.textContent = "stop";
  } else {
    // stop
    clearInterval(id);
    id = null;
    button.textContent = "start";
  }
};

resetButton.onclick = function() {
    clearInterval(id); // タイマーを停止
    id = null; // IDをリセット
    count = 0; // カウントを0にする
    display.textContent = "0.00"; // 表示をリセット
    button.textContent = "start"; // ボタンのテキストを戻す
  };