// Objectif : ne recupérer que les voyelles, sauf le Y, d'une phrase

let sentence = 'Fuck society and have a good day';


let result = [];
let whale = [];

for(let i = 0; i < sentence.length; i++){
    if(sentence[i] === 'a' || sentence[i] === 'e' || sentence[i] === 'i' || sentence[i] === 'o' || sentence[i] === 'u'){
        result.push(sentence[i]);
    }
}

for(let y = 0; y < result.length; y++){
    whale[y] = result[y];
}

for( y = 0; y < result.length; y++){
    if(result[y] === 'u'){
       whale.splice(y + 1, 0, 'u');
       console.log(y);
    }
   
}

for( y = 0; y < result.length; y++){
    if(result[y] === 'a'){
        whale.splice(y +1,0,'a');
    }
}
console.log(whale.join());