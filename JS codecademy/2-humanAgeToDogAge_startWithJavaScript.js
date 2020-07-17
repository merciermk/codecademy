const myAge = 34;
let earlyYears = 2;
let laterYears = myAge -2;

earlyYears = earlyYears * 10.5;
laterYears *= 4;

console.log(`${laterYears} log de laterYears`);
console.log(`${earlyYears} log de earlyYears`);

let myAgeInDogYears = earlyYears + laterYears;

let myName = 'Mike Mercier'.toLowerCase();
console.log(myName + ' log de myName');

console.log(`My name is ${myName}. I am ${myAge} years old in human years wich is ${myAgeInDogYears} years old in dog years.`)
