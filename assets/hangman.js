//array with answers - 11 words
let beer = ["Ale", "Lager", "IPA", "Blonde", "Boch", "Pilsner", "Kolsch", "Porter", "Stout", "Amber", "Pale"];

//choose word randomly
let random = Math.floor(Math.random() * beer.length);
let word = beer[random];
let underscore = [];

//console.log(word);

//underscores based on length of word
let genUnderscore = () => {
    for(let i = 0; i< word.length; i++) {
        underscore.push("_");
    }
    return underscore;
}
console.log(genUnderscore());

//get user input guess

document.addEventListener("keypress", (event) => {
    let keycode = event.keyCode;
    let keyword = String.fromCharCode(keycode);
    console.log (keyword);
});

//check if guess is right
//push to right array
//push to wrong array

