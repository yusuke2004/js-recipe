let number = 6;
let inputElements = []; 
let containerElements = [];
let addButtons = [];

for (let i = 0; i < number; i++) {
    inputElements[i] = document.getElementById(`input${i + 1}-todo`);
    containerElements[i] = document.getElementById(`cards${i + 1}-container`);
    addButtons[i] = document.getElementById(`add${i + 1}-button`);
}

// const inputElements = [
//     document.getElementById("input1-todo"),
//     document.getElementById("input2-todo"),
//     document.getElementById("input3-todo"),
//     document.getElementById("input4-todo"),
// ];
// const containerElements = [
//     document.getElementById("cards1-container"),
//     document.getElementById("cards2-container"),
//     document.getElementById("cards3-container"),
//     document.getElementById("cards4-container"),
// ];
// const addButtons = [
//     document.getElementById("add1-button"),
//     document.getElementById("add2-button"),
//     document.getElementById("add3-button"),
//     document.getElementById("add4-button"),
// ];

const createCard = function(text) {
    const card = document.createElement("div");
    card.className = "card";
  
    // todo を作成

    const todo = document.createElement("div");
    todo.className = "todo";
    todo.textContent = text;
  
    // todo を card の中に追加する
    card.append(todo);

    // 削除ボタン を作成
    const deleteButton = document.createElement("div");
    deleteButton.className = "delete";

    // 削除ボタン を押したときの処理を登録
    deleteButton.onclick = function() {
        // カードを削除する
        card.remove();
    };

    // 削除ボタン を card の中に追加する
    card.append(deleteButton);

    return card;
};

const addTodo = function(index) {
    const text = inputElements[index].value;
    const card = createCard(text);
    containerElements[index].append(card);
    inputElements[index].value = "";
}

for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].onclick = function() {
        addTodo(i);
    };
};

// const addTodo = function(number) {
//     // card を container の中に追加する
//     if (number === 0) {
//         const text1 = input1Element.value;
//         const card1 = createCard(text1);
//         container1.append(card1);
//         input1Element.value = "";
//     } else if (number === 1) {
//         const text2 = input2Element.value;
//         const card2 = createCard(text2);
//         container2.append(card2);
//         input2Element.value = "";
//     } else if (number === 2) {
//         const text3 = input3Element.value;
//         const card3 = createCard(text3);
//         container3.append(card3);
//         input3Element.value = "";
//     }
// };