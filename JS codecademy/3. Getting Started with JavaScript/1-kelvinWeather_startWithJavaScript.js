/* But de l'exercise : transformer des kelvin en celsius.

Constante kelvin, j'utilise const car la valeur ne bougera pas. */
const kelvin = 0;

/* console.log affiche dans la fenêtre la variable. ${} permet de melanger sentence et variable.  */
console.log(`${kelvin} degres kelvin`);

/* Celsius est calculable en enlevant 273 à la variable kelvin*/
let celsius = kelvin - 273;

console.log(`${celsius} degres celsius`);

/* Calcul de farenheit */
let fahrenheit = celsius * (9/5) +32;
// Arondir vers le bas : //
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);

//convertir en newton:
let newton = celsius * (33/100);
console.log(`${newton} degres en newton SANS math.floor`);
newton = Math.floor(newton);

console.log(`${newton} degres en newton avec math.floor`);
