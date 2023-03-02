const taskList2 = [
    {
        id: 1,
        code: `const obj = {
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
        
        showProps(obj);`,
        discription: `Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), яка приймає даний об’єкт і виводить список його властивостей записаних в масив. Виведіть також масив значень властивостей об’єкта.`
    },
    {
        id: 2,
        code: `function propsCount(currentObject) {
            const metods = Object.getOwnPropertyNames(currentObject);
            return metods.length;
          }
          propsCount({ name: 'Vasya', age: 25, city: 'Kyiv', country: 'Ukraine', hobby: 'football' });
        `,
        discription: `Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.`
    },
    {
        id: 3,
        code: `class Person {
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
                return 'Current course: '+ (currentYear - this.year);
            }
        }
       new Student('Petro', 'Petrenko', 2019).showFullName('Petrovych');
        
        `,
        discription: `Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить ім’я і прізвище особи. 
        Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету). 
        В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента. 
        Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВУЗу year.`
    },
    {
        id: 4,
        code: `class GeometricFigure {
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
                    console.log('Geometric figure: ' + figure.toString() + ' - area: ' + figure.getArea());
                    return acc + figure.getArea();
                }
            }, 0);
            return figuresArea;
        }
        const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
        handleFigures(figures);`,
        discription: `Створіть батьківський клас GeometricFigure, який має порожній метод для визначення площі getArea() та метод toString() для виведення назви класу.
        Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure. Кожен з дочірніх класів має свою реалізацію методу getArea(), для визначення площі фігури. В конструкторах дочірніх класів передбачити властивості необхідні для визначення площі фігури, наприклад для кола - радіус r.
                Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів дочірніх класів figures, перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування, виводитиме назву створеного об’єкту відповідної фігури, розраховану площу фігури та сумарну площу всіх фігур. Для реалізації функції можете використати метод reduce().`
    }
];
let dropdownMenu2 = document.querySelectorAll('.task-2');
dropdownMenu2.forEach(item => {
    item.addEventListener("click", function (event) {
        let index = event.target.dataset.index;
        console.log(event.target.dataset.index);
        myCodeMirror.setValue(taskList2[index - 1].code);
        document.querySelector('.task-decription').innerHTML = taskList2[index - 1].discription;
});
});