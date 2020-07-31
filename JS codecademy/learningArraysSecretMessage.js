let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//remove last string
console.log(secretMessage.length);
secretMessage.pop();

// Add Two string on array
//secretMessage.push('to', 'Program');

// change easily to 'right'
secretMessage[7] = 'right';
//console.log(secretMessage[7]);

// remove first string
secretMessage.shift();
//console.log(secretMessage);

// Add 'programming' to the beginning of array
secretMessage.unshift('Programming');
//console.log(secretMessage);

// Remove strings get,right,the,first,time
//array.splice(début, nbASupprimer[, élem1[, élem2[, ...]]])
secretMessage.splice(6,5, 'know');
//console.log(secretMessage);

// Afficher le tableau comme une phrase.
console.log(secretMessage.join(' '));