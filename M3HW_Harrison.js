//Section 2, q1
let userName = 'Chancellor Harrison';
let knowsJavaScript = true;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}
//Section 2, q2
let isSoccerFan = true
if (isSoccerFan == true){
  console.log('Goal!')
}else {
  console.log('No goal!')
}
//Section 2, q3
let wordCount = 5;

if (wordCount >= 0) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'y';

if (favoritePhrase == 'y') {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
//Section 2, q4
let wordCount = 5;

if (wordCount >= 0) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'y';

if (!favoritePhrase == 'y') {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
//Section 2, q5
let hungerLevel = 10
if(hungerLevel > 7){
  console.log('Time to eat!')
} else{
  console.log('We can eat later!')
}
//Section 2, q6
let moonPhase = 'full';

if (moonPhase === 'full') {
  console.log('Howl!');
} else {
  console.log('I swear I am not a werewolf.');
}
//Section 2, q7
let moonPhase = 'solar eclipse';

if (moonPhase === 'full') {
  console.log('Howl!');
} else if (moonPhase === 'mostly full'){
  console.log('Arms and legs are getting hairier.')
} else if (moonPhase === 'mostly new'){
  console.log('Back on two feet.')
} else{
  console.log('Invalid moon phase.')
}
//Section 2, q8
let moonPhase = 'full';
let isFoggyNight = false;

if (moonPhase === 'full' || isFoggyNight === true) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full'){
  console.log('Arms and legs are getting hairier.')
} else if (moonPhase === 'mostly new'){
  console.log('Back on two feet.')
} else{
  console.log('Invalid moon phase.')
}
//Section 2, q9
let moonPhase = 'full';
switch (moonPhase){
  case 'full':
    	console.log('Howl!');
    	break;
  case 'mostly full':
   		console.log('Arms and legs are getting hairier.');
    	break;
  case 'mostly new':
    	console.log('Back on two feet.');
    	break;
  default:
    	console.log('Invalid moon phase');
    	break;
                 }
//Section 2, q10
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
//Section 3, q1
let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};
pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.
// Section 3, q2
const takeOrder = () =>{
  console.log('Order: pizza')
}
takeOrder();
//Section 3, q3
const takeOrder = (topping) =>{
  console.log('Order: pizza ' + topping)
}
takeOrder('topped with mushrooms');
//Section 3, q4
const takeOrder = (topping, crustType) =>{
  console.log(crustType + topping)
}
takeOrder('topped with bacon', 'thin crust pizza ');
takeOrder('topped with sausage', 'thick crust pizza ');
takeOrder('topped with pepperoni', 'flatbread crust pizza ');
//Section 3, q5
let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

console.log(getSubTotal(orderCount));
//Section 3, q6
let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = () => {
 return getSubTotal(orderCount) * 0.06; 
};

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(); 
}; 

console.log(getSubTotal(orderCount));
console.log(getTotal());
//Section 3, q7
function isGreaterThan(numberOne, numberTwo){
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
}

isGreaterThan(4, 8)
//Section 3, q8
const isGreaterThan =(numberOne, numberTwo) =>{
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
}

isGreaterThan(4, 8)
//Section 3, q9
const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');