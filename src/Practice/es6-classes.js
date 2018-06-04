
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi I am ${this.name}.`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // Calling constructor in Parent class.
    this.major = major;
  }

  hasMajor() {
    return !!this.major; // if nv put !!, it will return the string instead of boolean value
  }

  // Overriding
  getDescription() {
    let description = super.getDescription(); // use the parent method

    // New description if he has major
    if (this.hasMajor()) {
      description += ` His major is ${this.major}`
    }

    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greetingMessage = super.getGreeting();
    
    if (this.hasHomeLocation()) {
      greetingMessage += ` I'm visiting from ${this.homeLocation}.`
    }
    return greetingMessage;
  }
}

const me = new Traveller('Chih Tun', 23, 'Taiwan');
console.log(me.getGreeting());

const defaultPerson = new Traveller();
console.log(defaultPerson.getGreeting());