//1
const obj = {
    name: 'Vasya',
    age: 25,
    city: 'Kyiv',
    country: 'Ukraine',
    hobby: 'football'
}
function showProps(obj) {
    const arr = [];
    for (let key in obj) {
        arr.push(key);
    }
    return arr;
}

console.log(showProps(obj));
//2
function propsCount(currentObject) {
    const metods = Object.getOwnPropertyNames(currentObject);
    return metods.length;
  }
  console.log(propsCount({ name: 'Vasya', age: 25, city: 'Kyiv', country: 'Ukraine', hobby: 'football' }));
//3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return this.name + ' ' + this.surname;
    }
}
class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        return this.surname + ' ' + this.name + ' ' + midleName;
    }
    showCourse() {
        const currentYear = new Date().getFullYear();
        if (currentYear < this.year) {
            return 'Year of admission is incorrect';
        } else if (currentYear - this.year > 6) {
            return 'You have already graduated';
        }
        return `Current course: ${currentYear - this.year}`;
    }
}
console.log(new Student('Petro', 'Petrenko', 2019).showFullName('Petrovych'));
console.log(new Student('Petro', 'Petrenko', 2019).showCourse());
//4
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Triangle extends GeometricFigure {
    constructor(a, h) {
        super();
        this.a = a;
        this.h = h;
    }
    getArea() {
        return this.a * this.h / 2;
    }
}
class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }
    getArea() {
        return this.a ** 2;
    }
}
class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }
    getArea() {
        return Math.PI * this.r ** 2;
    }
}
function handleFigures(figures) {
    const figuresArea = figures.reduce((acc, figure) => {
        if (figure instanceof GeometricFigure) {
            console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
            return acc + figure.getArea();
        }
    }, 0);
    return figuresArea;
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));