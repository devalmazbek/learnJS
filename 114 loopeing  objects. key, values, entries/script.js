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


const openingDays = Object.keys(openingHours);

console.log(openingDays);
console.log(`we are opened ${openingDays.length} times in a week`); 

const values = Object.values(openingHours);

console.log(values);
for(const prop of values){
  console.log(prop);
  console.log(prop.open);
}

const entries = Object.entries(openingHours);

console.log(entries);

for(let [days, {open, close}] of entries) {
  console.log(days, open, close);
}

// ******************challenge number 2***********

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


// Let's continue with our football betting app!
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
// GOOD LUCK 😀


/// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
 const scored = Object.values(game.scored);

let number = 0;
for(let prop of scored) { 
  console.log(`Goal ${++number}: ${prop}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

function getTotalOdds() {
  let resultOdds = 0;
  const totalOdds = Object.values(game.odds);
  for(let prop of totalOdds) {
    resultOdds += prop;

  }

  return resultOdds / totalOdds.length;

}

console.log(getTotalOdds());
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

function showOdds() {
  const team1 = game.team1;
  const team2 = game.team2;
  const totalOdds = Object.values(game.odds);
  const [baern, draw, dortmund] = totalOdds;
  console.log(`Odds of victory ${team1}: ${baern}`);
  console.log(`Odds of draw: ${draw}`);
  console.log(`Odds of victory Borrussia Dortmund: ${dortmund}`);
}

showOdds();

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
// GOOD LUCK 😀

const scores = {
  [game.scored[1]]: 1,
  [game.scored[3]]: 1,
  [game.scored[0]]: 2
};

console.log(scores);