const inputElement = document.getElementById("input-todo");
const container = document.getElementById("cards-container");
const addButton = document.getElementById("add-button");

let list = JSON.parse(localStorage["list"] || "[]");

addButton.onclick = function () {
  const text = inputElement.value;

  list.push(text);

  // localStorageを更新する
  localStorage["list"] = JSON.stringify(list);

  const card = createCard(text);
  container.append(card);

  // 入力欄を空にする
  inputElement.value = "";
};

// 共通の処理：テキストからカードを作成する
const createCard = function (text) {
  const card = document.createElement("div");
  card.className = "card";

  const todo = document.createElement("div");
  todo.className = "todo";
  todo.textContent = text;
  card.append(todo);

  const deleteButton = document.createElement("div");
  deleteButton.className = "delete";

  deleteButton.onclick = function () {
    // listからテキストを削除する
    let index = 0;
    for (const child of container.children) {
      if (child === card) {
        list.splice(index, 1);
        break;
      }
      index += 1;
    }

    localStorage["list"] = JSON.stringify(list);

    card.remove();
  };
  card.append(deleteButton);

  return card;
}

// 画面読み込み時、localStorageをもとにカードを追加する
const fragment = document.createDocumentFragment()
for (const text of list) {
  const card = createCard(text);
  fragment.append(card);
}
container.append(fragment);
