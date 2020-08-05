// Objectif : ne recupérer que les voyelles, sauf le Y, d'une phrase

let sentence = 'Fuck Society';


let result = [];
let whale = [];

for(let i = 0; i < sentence.length; i++){
    if(sentence[i] === 'a' || sentence[i] === 'e' || sentence[i] === 'i' || sentence[i] === 'o' || sentence[i] === 'u'){
        result.push(sentence[i]);
    }
}

for(let z = 0; z < result.length; z++){
    whale[z] = result[z];
}

for(let y = 0; y < result.length; y++){
    if(result[y] === 'u'){
       
       whale.splice(y,0,'u');
    }
}


console.log(whale.join(''));