//array with answers - 11 words
let beer = ["ale", "lager", "ipa", "blonde", "boch", "pilsner", "kolsch", "porter", "stout", "amber", "pale"];

//choose word randomly
let random = Math.floor(Math.random() * beer.length);
let word = beer[random];
let rightletter = [];
let wrongletter = [];
let underscore = [];

console.log(word);

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
    let keyletter = String.fromCharCode(keycode);
    
    console.log(keyletter);

//right letter    
    if (word.indexOf(keyletter) > -1){
        rightletter.push(keyletter);
        console.log(rightletter);
    } else {
        wrongletter.push(keyletter);
        console.log(wrongletter);
    }
    
    
});

//check if guess is right
//push to right array
//push to wrong array

