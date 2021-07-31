// Add your Circle class here

// class Bird {
//     constructor(name) {
//       this.name = name;
//     }
//     set phrase(phrase) {
//       this._phrase = phrase;
//     }
//     get speak() {
//       return `${this.name} says ${this._phrase || 'squawk'}`;
//     }
//   }
  
//   let daffy = new Bird('Daffy');
//   daffy.speak; // => 'Daffy says squawk'
//   daffy.phrase = "it's rabbit season!";
//   daffy.speak; // => 'Daffy says it's rabbit season!'

//   let buddy = new Bird('Buddy');
//   buddy.phrase = "What'cha doin'?";
//   console.log(buddy.speak);

class Circle {
    constructor (radius){
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return Math.PI * this.diameter;
    }
    get area() {
        return Math.PI * (this.radius * this.radius)
    }
    set diameter(diameter) {
        this.radius = diameter/ 2;
    }

    set circumference(circumference){
        this.radius = circumference/(2 * Math.PI);
    }
    set area(area) {
        this.radius = Math.sqrt((area/Math.PI))
    }
}


const circle = new Circle(10);
console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.circumference);
console.log(circle.area);