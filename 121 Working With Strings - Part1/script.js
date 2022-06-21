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
