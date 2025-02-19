let str = null;

const genki = function(number) {
    for (let i = 1; i <= number; i++) {
        str = String(i);
        if (i % 3 === 0 || str.includes("3")) {
            console.log(i + "!!!!!");
        } else {
            console.log(i);
        }
    }
};

genki(233);