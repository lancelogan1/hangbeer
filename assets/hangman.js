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
let anyKeyToStart = false;
//manipulation 
let underscorechange = document.getElementsByClassName("underscores");
let livesHTML = document.getElementsByClassName('livesd')
let docRightLetter = document.getElementsByClassName ("rightGuess");
console.log(word);
//underscores based on length of word
let genUnderscore = () => {
    for (let i = 0; i < word.length; i++) {
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

    let trash = [];

    if (anyKeyToStart === true) {
        for (i = 0; i < word.length; i++) {
            //right letter    
            //right letter / wrong letter   
            if (word.charAt(i) === keyletter) {
                rightletter.push(keyletter);
                console.log(rightletter);
    
                underscore[i] = keyletter;
                underscorechange[0].innerHTML = underscore.join(" ");
                trash.push(i);
    
            }
            if (underscore.join("") === word) {
                alert("WIN");
            }
            console.log(underscore);
        }
        for (j = 0; j < wrongletter.length; j++) {
            if (wrongletter[j] === keyletter) {
                trash.push(j);
                
                console.log(wrongletter);
    
            }
        }
    
        if (trash.length <= 0) {
            wrongletter.push(keyletter);
            lives--;
            livesHTML[0].innerHTML = lives;
            if (lives === 0) {
                location.reload();
                alert('GAME OVER!!');
            }
        }
    
    } else {
        anyKeyToStart = true;
        return;
    }

});

livesHTML[0].innerHTML = lives;

underscorechange[0].innerHTML = underscore.join(" ");
//docRightLetter[0].innerHTML = rightletter.join("");




 //check if guess is right
//push to right array
//push to wrong array
    //underscore.join("");
   //underscorechange[0].innerHTML = genUnderscore().join("");
