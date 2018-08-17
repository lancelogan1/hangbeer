//array with answers - 11 words
let beer = ["ale", "lager", "ipa", "blonde", "boch", "pilsner", "kolsch", "porter", "stout", "amber", "pale"];
 //choose word randomly
//variables
let random = Math.floor(Math.random() * beer.length);
let word = beer[random];
let rightletter = [];
let wrongletter = [];
let underscore = [];
let lives = 5;
let empty = [];
 //manipulation 
let underscorechange = document.getElementsByClassName("underscores");
let livesHTML = document.getElementsByClassName('livesd')
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

    for(i = 0; i < word.length; i++){
 //right letter    
//right letter / wrong letter   
    if (word.charAt(i) === keyletter){
        rightletter.push(keyletter);
        console.log(rightletter);
        
        underscore [i] = keyletter;
        underscorechange[0].innerHTML = underscore.join(" ");
        empty.push(i);
       
    }
    if (underscore.join("") === word) {
        alert("WIN"); 
    }
        console.log(underscore);
    } 
    for (j = 0; j < word.length; j++){
    if(wrongletter[j] === keyletter) {
        empty.push(j);
        console.log(wrongletter);
        
    }
}

if(empty.length <=0){
    wrongletter.push(keyletter);
    lives--;
    livesHTML[0].innerHTML = lives;
    if(lives === 0){
        alert('GAME OVER!!');
        Location.reload();
    }
}
    
    
    });

    livesHTML[0].innerHTML = lives;
 //check if guess is right
//push to right array
//push to wrong array
    //underscore.join("");
   //underscorechange[0].innerHTML = genUnderscore().join("");
