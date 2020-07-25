let userChoise = (userSelect) => {
    userInput.toLowerCase();
    if(userInput === 'pierre'|| userInput === 'feuille' || userInput === 'ciseaux'){
      return userSelect;
    }else{
      return console.log('choisir entre pierre papier ciseaux');
      }
  };

let compuRandom = () => {
    let numberRandom = Math.floor(Math.random() * 3);
    let randomResult;

    if(numberRandom === 0){
        randomResult = 'pierre';
    } else if (numberRandom === 1){
        randomResult = 'feuille';
    } else if (numberRandom === 2){
        randomResult = 'ciseaux'
    }else{
        randomResult = 'error'
    }
    return randomResult;
}

function compare(userChoise, compuRandom){
    let result;
    if(userChoise === 'pierre' && compuRandom === 'ciseaux'|| userChoise  === 'feuille' && compuRandom === 'pierre' || userChoise === 'ciseaux' && compuRandom === 'feuille'){
        result = 'le joueur gagne';
    }else if(userChoise === compuRandom){
        result = 'égalité';
    }else{
        result = 'Computer gagne';
    }
    return result; 
}


userChoise = 'pierre';
const computer = compuRandom();

let result = compare(userChoise, computer);

console.log(`userChoise is ${userChoise}`);
console.log(`computer choise is ${computer}`);
console.log(result);


