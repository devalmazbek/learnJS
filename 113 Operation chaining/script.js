// optional chaining

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
	weekDays[3]: {
      open: 12,
      close: 22,
    },
    weekDays[4]: {
      open: 11,
      close: 23,
    },
    weekDays[5]: {
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

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

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

if(restaurant.openingHours && restaurant.openingHours.mon) {
	console.log(restaurant.openingHours.mon.open);
}

else {
	console.log('there is no element like this');
}




for(let days of weekDays) {
	const open = restaurant.openingHours[days]?.open ?? 'not opened';
	const closed = restaurant.openingHours[days]?.close ?? 'closed';
	console.log(`day - ${days} opened at ${open} close at ${closed}`);
}

// console.log(restaurant.openingHours.mon.open);

console.log(restaurant.order?.(2, 2) ?? 'there are not element');
console.log(restaurant.ordering?.() ?? 'there are no method');

const user = [{name: 'Almaz'}, {email: 'test@gmail.com'}];

console.log(user[0]?.name);
console.log(user[0]?.surname ?? 'there are no key');

