let string = 'hello my brother';


console.log(string.slice(0, string.indexOf(' ')));
console.log(string.slice(string.lastIndexOf(' ') + 1));

const checkMiddleSeat = function(seat) {
	const middleSeat = seat.slice(-1);
	if(middleSeat === 'C' || middleSeat === 'B') {
		console.log('Your seat is on middle');
	}
	else {
		console.log('Your seat id on the left or on the right');
	}
}

checkMiddleSeat('ABC');
checkMiddleSeat('ACB');
checkMiddleSeat('BGR');
checkMiddleSeat('VBG');

const exampleEmail  = 'test@mail.ru';
const inputEmail = 'almaz@mail.ru';

const checkEmail = inputEmail.toLowerCase().trim();
console.log(checkEmail);

const currency = '297$';
const convertToSom = currency.replace('$', 'Som');
console.log(convertToSom);
const sentense = 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Nihil enim ab officia, quas dicta necessitatibus numquam ipsa qui perferendis, excepturi debitis deleniti consequatur eius similique. Incidunt, rem, dolores. Quis, voluptatem.';

const changeLetter = sentense.replace(/l/g, 'L');
console.log(changeLetter);
