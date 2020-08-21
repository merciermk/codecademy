// Prendre une phrase et l'inverser

let reversing;
let regularWord = 'Hello World';

function reverseThis(word){
    let drow = [];
    let y = 0;
    for(let i = word.length -1 ; i >= 0; i--) {
        
        drow[y] = word[i];
        y++;
    }
    return drow;
}
console.log(`Your entry is: ${regularWord}`);
reversing = reverseThis(regularWord);
console.log(`The reversing of your entry is :  ${reversing.join("")}`);