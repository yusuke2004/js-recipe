// 登場人物たち
const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const nextQuizButton = document.getElementById("next-quiz")

let quizNumber = 0;
const quizzes = [
  {
    text: "この星の名前は何でしょう？",
    image: "Ganymede.jpg",
    choices: [
      {
        text: "ゴリアテ",
        isCorrect: false,
        feedback:
          "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
      },
      {
        text: "ゼニガメ",
        isCorrect: false,
        feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
      },
      {
        text: "ガニメデ",
        isCorrect: true,
        feedback: "正解！ガニメデは、木星の第三惑星だよ！",
      },
    ],
  },
  {
    text: "いま、何問目？",
    image: "Two.jpeg",
    choices: [
      {
        text: "１",
        isCorrect: false,
        feedback: "残念！ひとつ少ないよ。",
      },
      {
        text: "２",
        isCorrect: true,
        feedback: "正解！１でも３でもないよ！",
      },
      {
        text: "３",
        isCorrect: false,
        feedback: "残念！ひとつ多いよ。",
      },
    ],
  },
  {
    text: "この城の名前は？",
    image: "Maruoka.png",
    choices: [
      {
        text: "丸岡城",
        isCorrect: true,
        feedback: "正解！どこからどうみても丸岡城だね。",
      },
      {
        text: "丸亀城",
        isCorrect: false,
        feedback: "残念！どこからどうみても丸亀城ではないよ。",
      },
      {
        text: "丸子城",
        isCorrect: false,
        feedback: "残念！どこからどうみても丸子城ではないよ。",
      },
    ],
  },
]

const reloadQuiz = function (quizNumber) {
  const quiz = quizzes[quizNumber];

  quizText.textContent = "Q. " + quiz.text;

  quizImage.src = "./images/" + quiz.image;

  choice1.textContent = quiz.choices[0].text;
  choice2.textContent = quiz.choices[1].text;
  choice3.textContent = quiz.choices[2].text;

  // フィードバックを削除
  feedback.textContent = "";

  // 次の問題ボタンを隠す
  nextQuizButton.classList.add("hidden");
}

const choose = function (choiceNumber) {
  const choice = quizzes[quizNumber].choices[choiceNumber];

  feedback.textContent = choice.feedback;

  // 正解ならば……
  if (choice.isCorrect) {
    if (quizNumber < quizzes.length - 1) {
      // 次の問題があれば、次の問題ボタンを表示
      nextQuizButton.classList.remove("hidden");
    }
  }
}

choice1.onclick = function () {
  choose(0);
};
choice2.onclick = function () {
  choose(1);
};
choice3.onclick = function () {
  choose(2);
};

nextQuizButton.onclick = function () {
  quizNumber += 1;
  reloadQuiz(quizNumber);
};

reloadQuiz(0);
