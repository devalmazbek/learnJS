// optional chaining

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
	[weekDays[3]]: {
      open: 12,
      close: 22,
    },
  [weekDays[4]]: {
      open: 11,
      close: 23,
    },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


// MAPS ITERATION

const question = new Map([
  [1, [
    ['questionTitle', 'What is the best programming language'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    [true, 'Correct 🎉'],
    [false, 'Wrong 😒']
  ]]
  
]);

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
console.log(question);

for(const [key, value] of question) {
  console.log(value);
}

const answer = +prompt('your answer');

if(answer === 3) {
  document.write(`It is ${question.get(true)}, It is ${question.get(3)}`);
}
else {
  document.write(`it is ${question.get(false)}, you are wrong`);
}
