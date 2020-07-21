let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistered = true;
let runnerAge = 16;
let runHour = '';

if(runnerAge >= 18 && earlyRegistered){
  raceNumber += 1000;
  runHour = 'Your start at 9:30 am';
}else if (runnerAge >= 18 && !earlyRegistered) {
  runHour = 'Your start at 11:00 am';
}else {
  // Young registrant
  runHour = 'Your start at 12:30 pm';
}
console.log(`Your number is :${raceNumber}`);
console.log(runHour);
