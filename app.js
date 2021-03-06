//Same keys and values ES2015

// function createInstructor(firstName, lastName) {
// 	return {
// 		firstName: firstName,
// 		lastName: lastName
// 	};
// }
/* Write an ES2015 Version */

const createInstructor = (firstName, LastName) => {
	firstName, lastName;
};
//Computed Property Names

var favoriteNumber = 42;

// var instructor = {
// 	firstName: 'Colt'
// };

//instructor[favoriteNumber] = 'That is my favorite!';

/*Write an ES2015 Version */

const instructor = {
	firstName: 'Colt',
	[favoriteNumber]: 'That is my favorite'
};

//Object Methods ES2015

// var instructor = {
// 	firstName: 'Colt',
// 	sayHi: function() {
// 		return 'Hi!';
// 	},
// 	sayBye: function() {
// 		return this.firstName + ' says bye!';
// 	}
// };
/* Write an ES2015 Version */

var instructors = {
	firstName: 'Colt',
	sayHi() {
		return 'Hi!';
	},
	sayBye() {
		return this.firstName + ' says bye!';
	}
};

const createAnimal = (species, verb, noise) => ({
	species,
	[verb]() {
		return noise;
	}
});
