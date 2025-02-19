const figure2 = document.getElementById("figure2");
const square2Button = document.getElementById("square2-button");
const circle2Button = document.getElementById("circle2-button");
const triangle2Button = document.getElementById("triangle2-button");

circle2Button.onclick = function() {
    // figure に rounded クラスを追加する
    figure2.classList.remove("triangle");
    figure2.classList.add("rounded");
}
  
square2Button.onclick = function() {
    // figure から rounded クラスを削除する
    figure2.classList.remove("rounded", "triangle");
}

triangle2Button.onclick = function() {
    // figure から rounded クラスを削除する
    figure2.classList.remove("rounded");
    figure2.classList.add("triangle");
}

let n = 0;
figure2.onclick = function() {
    if (n === 0) {

        figure2.classList.add("rounded");
        n = 1;
    } else if (n === 1) {
        figure2.classList.remove("rounded");
        figure2.classList.add("triangle");
        n = 2;
    } else if (n === 2) {
        figure2.classList.remove("triangle");
        n = 0;
    }
}