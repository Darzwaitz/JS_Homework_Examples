// Classes are to provide a structure for creating an object - *uppercase names for classes
class Person {
    //constructor function in class - default value set for greet in case no value exists
    constructor(name, age, greet = 'Hallo') {

        // constructor function attaches data to the object - prototype
        this.name = name;
        this.age = age;
        this.greeting = greet;
    }

    //method - NB: this sits on the prototype
    getGreeting() {
        return `${this.greeting} ${this.name}! Welcome`
    }
};

//extend Person class with sub class *this is adding to prototype chain
class Employee extends Person {

    constructor(name, age, greet = 'Hi', salary) {
        //pass in and add data with the 'super' command to call constructor in Person
        super(name, age, greet);
        this.salary = salary;
    };

    //overide method - gets the greeting from this one when called
    getGreeting() {
        return super.getGreeting() + " - Don't forget to record your time";
    };
    //and add a new method to Employee sub class
    getSalary() {
        return this.salary;
    }

};


//object from class
let p1 = new Person('Darz', 38, 'Yo');
let p2 = new Person('Ciarz', 26);

//subclass call
let e1 = new Employee('Toze', 35, 'awreet', 50000);

//console.log(p1, p2);
//console.log(p2.getGreeting());
//console.log(e1.getGreeting());
console.log(e1.getSalary());