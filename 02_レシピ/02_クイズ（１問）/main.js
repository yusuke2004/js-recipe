const feedback = document.getElementById("feedback");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");

const feedbacks = [
    "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    "正解！ガニメデは、木星の第三惑星だよ！",
]

const choose = function(choiceNumber) {
    feedback.textContent = feedbacks[choiceNumber];
};

choice1.onclick = function() {
    choose(0);
};
choice2.onclick = function() {
    choose(1);
};
choice3.onclick = function() {
    choose(2);
};

// const choose = function(choiceString) {
//     if (choiceString === 0) {
//         feedback.textContent =
//           "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
//     } else if (choiceString === 1) {
//         feedback.textContent =
//           "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
//     } else if (choiceString === 2) {
//         feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
//     }
// };

// choice1.onclick = function() {
//     // ゴリアテを選択
//     choose(0);
// };
// choice2.onclick = function() {
//     // ゼニガメを選択
//     choose(1);
// };
// choice3.onclick = function() {
//     // ガニメデを選択
//     choose(2);
// };