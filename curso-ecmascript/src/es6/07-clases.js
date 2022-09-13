//Declarando 
class User {

};
// instancia de una clase
// const newUser = new User();

class user {
    // methods
    greeting(){
        return 'hello'
    }
};

const gndx = new user()

console.log(gndx.greeting());

const babeloper = new user();
console.log(babeloper.greeting());

// constructor

class user{
    constructor(){
        console.log('new user');
    }
    greeting(){
        return 'hello'
    }
}

const david = new user();

// this

class user{
     //constructor
    constructor(name){
        this.name = name;
    }

    //methods
    speak(){
        return 'hello';
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const usoThis = new user('Fabian');
console.log(usoThis.greeting());

// setters getters

class user{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // metodos
    speak(){
        return 'hello';
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age = n;
    }
}

const setAndGet = new user('david', 15);
console.log(setAndGet.uAge);
console.log(setAndGet.uAge = 20)