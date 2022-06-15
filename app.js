console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies = []) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    removeHobby(rmHobby) {
        this.hobbies = this.hobbies.filter(hobby => hobby != rmHobby)
    }

    // Splice
    // removeHobby(rmHobby) {
    //    Find the index of rmHobby
    //     let foundIdx = this.hobbies.indexOf(rmHobby);
    //    Use splice to remove the index value
    //     this.hobbies.splice(foundIdx, 1);
    // }

    // Slice
    // removeHobby(hobby) {
    //     let foundIdx = this.hobbies.indexOf(hobby);
    //     let valuesBefore = this.hobbies.slice(0, foundIdx);
    //     let valuesAfter = this.hobbies.slice(foundIdx + 1);
    //     this.hobbies = valuesBefore.concat(valuesAfter);
    // }

    greeting() {
        console.log(`Hello ${this.name}!`);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies);
        this.occupation = 'Full Stack Web Developer';
    }
    greeting() {
        console.log(`Hello ${this.occupation} ${this.name}!`);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const person1 = new Person('John Doe', 3, 'New York City', ['gaming', 'reading']);
console.log(person1);
person1.greeting();
person1.addHobby('sleeping');
person1.removeHobby('gaming');

const coder1 = new Coder('Jane Doe', 1, 'Los Angeles', ['coding', 'running', 'knitting']);
console.log(coder1);
coder1.greeting();
coder1.addHobby('painting');
coder1.removeHobby('knitting');

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");