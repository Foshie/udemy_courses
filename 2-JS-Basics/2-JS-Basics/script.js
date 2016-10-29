// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

console.log(name + ' ' + lastName + ' is ' + age + ' year\'s old');

var fullAge = true;

console.log(fullAge);
*/

// Lecture: variables 2
/*var name = 'John';
var age = 26;

// console.log(name + age);

var job, isMarried;

// console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' year old ' + job + 
	'. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';
console.log(name + ' is a ' + age + ' year old ' + job + 
	'. Is he married? ' + isMarried + '.');

// var lastName = prompt('What is the last name?');
// console.log(lastName);
alert(name + ' is a ' + age + ' year old ' + job + 
	'. Is he married? ' + isMarried + '.')
*/

// // Lecture: operators
// var now = 2016;
// var birthYear = now - 26;

// birthYear = now - 26*2;

// console.log(birthYear);

// var ageJohn = 30;
// var ageMark = 30;

// ageJohn = 3 + 5 *4 - 6;

// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if(isMarried === 'yes'){
	console.log(name + ' is married!');
} else{
	console.log(name + ' will hopefully marry soon');
}

isMarried = false;

if(isMarried){
	console.log('YES');
} else{
	console.log('NO');
}
*/

// Lecture: boolean logic and switch

// var age = 16;

// if(age < 20){
// 	console.log('John is a teenager');
// } else {
// 	console.log('John is a man');
// }

// var job = 'teacher';
// job = prompt('What does john do?')

// switch(job){
// 	case 'teacher':
// 		console.log('John teaches kids.');
// 		break;
// 	case 'driver':
// 		console.log('John drives a cab in Lisbon.');
// 		break;
// 	case 'cop':
// 		console.log('John helps fight crime');
// 		break;
// 	default:
// 		console.log('John does something else');

// }

//Coding Challenge 1
/*
var johnsHeight;
var friendsHeight;
var johnsAge;
var friendsAge;

var johnScore = johnsHeight + 5 * johnsAge;
var friendsScore = friendsHeight + 5 * friendsAge;

if(johnScore > friendsScore){
	console.log('John wins');
}else if(johnScore < friendsScore){
	console.log('Friend A wins');
}else{
	console.log('nobody wins');
}
*/

//Lecture: functions

// function calculateAge(yearOfBirth){
// 	var age = 2016 - yearOfBirth;
// 	return age;

// }

// var ageJohn = calculateAge(1990);
// console.log(ageJohn);

// function yearsUntilRetirement(name, yearOfBirth){

// 	var age = calculateAge(yearOfBirth);

//}
//
//Lecture Statements and expressions

/*
function someFun(par) {
	//code
}

var someFun = function(par){
	//code
}

//Expressions
3 + 4;
var x = 3;

//statements
if(x===5){
	//do something
}

*/

//Lecture: Arrays

// var names = ['John', 'Jane', 'Mark'];
// var years = new Array(1990, 1969, 1948);
// names.push('New');
// years.pop();
// names.unshift('First');
// names.indexOf('Jane');

//Lecture: Objects

var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
}

var xyz = 'job';

john.lastName = 'Milller';

john['job'] = 'programmer';

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;