//array with answers - 11 words
let beer = ["ale", "lager", "ipa", "blonde", "boch", "pilsner", "kolsch", "porter", "stout", "amber", "pale"];

//variables
let random = Math.floor(Math.random() * beer.length);
let word = beer[random];
let rightletter = [];
let wrongletter = [];
let underscore = [];

//manipulation 
let underscorechange = document.getElementsByClassName("underscores");

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

//right letter / wrong letter   
    if (word.indexOf(keyletter) > -1){
        rightletter.push(keyletter);
        
        underscore [word.indexOf(keyletter)] = keyletter;
        underscorechange[0].innerHTML = underscore.join(" ");
        if (underscore.join("") === word) {
            alert("WIN"); 
        }
        console.log(underscore);
    } else {
        wrongletter.push(keyletter);
        console.log(wrongletter);
    }    
});

    //underscore.join("");
   //underscorechange[0].innerHTML = genUnderscore().join("");

    


