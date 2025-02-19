const buttonContainer = document.getElementById("button-container");
const imageElement = document.getElementById("random-image");

let list = [ 
    {
        text: "doberman",
        about: "ドーベルマン",
    },
    {
        text: "dachshund",
        about: "ダックスフント",
    },
    {
        text: "shiba",
        about: "シバ",
     },
    {
        text: "chihuahua",
        about: "チワワ",
    },
];

for (let i = 0; i < list.length; i++) {
    const button = document.createElement("button");
    button.className = "dog";
    button.textContent = list[i].about;

    button.addEventListener("click", () => fetchDogImage(list[i].text));

    buttonContainer.appendChild(button);
}

const fetchDogImage = async (breed) => {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const data = await response.json();
        imageElement.src = data.message;
    } catch (error) {
        console.error("犬の画像取得に失敗しました:", error);
    }
};