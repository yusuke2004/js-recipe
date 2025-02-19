const catButton = document.getElementById("cat-button");
const cocktailButton = document.getElementById("cocktail-button");
const imageElement = document.getElementById("random-image");

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })

const fetchCatImage = async () => {
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();
        imageElement.src = data[0].url;
    } catch (error) {
        console.error("猫の画像取得に失敗しました:", error);
    }
};

const fetchCocktailImage = () => {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((response) => { return response.json(); })
        .then((data) => { imageElement.src = data.drinks[0].strDrinkThumb; });
};

catButton.addEventListener("click", fetchCatImage);
cocktailButton.addEventListener("click", fetchCocktailImage);