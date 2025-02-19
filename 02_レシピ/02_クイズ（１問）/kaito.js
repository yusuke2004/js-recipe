const quizText = document.getElementById("quiz-text");
const quizImage = document.getElementById("quiz-image");
const choicesContainer = document.getElementById("choices-container");
const feedback = document.getElementById("feedback");

const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
    {
      text: "ヒトカゲ",
      feedback: "残念！ヒトカゲは、火属性のポケモンだよ！",
    },
  ]
};

const reloadQuiz = function() {
  quizText.textContent = "Q. " + quiz.text;

  quizImage.src = "./images/" + quiz.image;

  choicesContainer.innerHTML = ""; //追加前に選択肢をリセット

  for (let i = 0; i < quiz.choices.length; i++) {
    const button = document.createElement("button");
    button.className = "choice";
    button.textContent = quiz.choices[i].text;
    button.onclick = function() {
      choose(i);
    };
    choicesContainer.appendChild(button);
  }
};

const choose = function(choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback;
};

reloadQuiz();