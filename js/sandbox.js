(function() {
let myCodeMirror = CodeMirror.fromTextArea(document.getElementById('myTextArea'), {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'monokai'
});
document.getElementById('runButton').addEventListener('click', function() {
    try {
        let result = eval(myCodeMirror.getValue());
        document.getElementById('console').innerHTML += JSON.stringify(result) + '<br>';
    } catch (e) {
        document.getElementById('console').innerHTML += e.message + '<br>';
    }
});
const cealrEditor = document.querySelector('.btn-clear-editor');
cealrEditor.addEventListener('click', () => {
    myCodeMirror.setValue('');
});
const taskList = [
    {
        name: 'Task 1',
        code: `
            function compact(array) {
                const compactedArray = [];
                array.forEach(element => compactedArray.includes(element) ? null : compactedArray.push(element));
                return compactedArray;
            };
            const arr = [5, 3, 4, 5,6,7,3];
            compact(arr);
        `,
        discription: `
            Написати функцію compact() яка має приймати 
            на вхід масив, а на вихід має повертати значення нового масиву без повторень.
            приклад: <br>
            const arr = [5, 3, 4, 5,6,7,3];<br>
            const arr2 = compact(arr);<br>
            console.log(arr2) ; // [5,3,4,6,7]`
    },
    {
        name: 'Task 2',
        code: `
            function createArray(start, end) {
                if (start === end) return [start];
                const array = [];
                if (start > end) {
                    for (let i = start; i >= end; i--) array.push(i);
                    return array;
                }
                for (let i = start; i <= end; i++) array.push(i);
                return array;
            };
            createArray(2, 9);
        `,
        discription: `
            Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:<br>
            - початкове значення<br>
            - кінцеве значення<br>
            а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)<br>
            let arr = createArray(2, 9);<br>
            console.log(arr); // [2,3,4,5,6,7,8,9]`
    },
    {
        name: 'Task 3',
        code: `
            const trimSpace1 = (str) => str.replace(/\s+/g, '').split(',').sort().join(', ');
            const trimSpace2 = (str) => str.split(',').map(element => element.trim()).sort().join(', ');
            let names = " Alex,    Orysia, Misha,    Ira     , Paul ";
            trimSpace1(names)
            trimSpace2(names)
        `,
        discription: `
            Створити функцію, яка використовує метод trim() для рядків. Дана функція має брати на вхід рядок із іменами,
            та сортувати їх по алфавіту, але між іменами може бути багато пробелів(функція має їх забирати)<br>
            let names = " Alex,    Orysia, Misha,    Ira     , Paul ";<br>
            let newNames = sortNames(names);<br>
            console.log(newNames); // 'Alex, Ira, Misha, Orysia, Paul'
        `
    },
    {
        name: 'Task 4',
        code: `
            function filterByAge(arr, min = 18) {
                return arr.filter(item => item.age >= min);
            }
            let arr = [  
            { name: "Misha Klym", age: 2},  
            { name: "Sam Winchester", age: 5 },  
            { name: "Jordan Peterson", age: 43 },  
            { name: "John Wayne", age: 17 },  
            { name: "Stan Lee", age: 22 }
            ];
            filterByAge(arr);
        `,
        discription: `
            Фільтрувати масив об’єктів по віку, тобто новий масив має складатись із об’єктів які старше 18 років.<br>
            let arr = [  <br>
            { name: "Misha Klym", age: 2},  <br>
            { name: "Sam Winchester", age: 5 },  <br>
            { name: "Jordan Peterson", age: 43 },  <br>
            { name: "John Wayne", age: 17 },  <br>
            { name: "Stan Lee", age: 22 }<br>
            ];<br>
            let newArray = ...; // [{ name: "Jordan Peterson", age: 43 }, { name: "Stan Lee", age: 22 }]
        `
    },
    {
        name: 'Task 5',
        code: `
            function countPower(arr) {
                const count = new Array(3).fill(0);
                arr.forEach(item => {
                    if (item > 9 && item < 100) {
                        count[0] += 1;
                    } else if (item > 99 && item < 1000) {
                        count[1] += 1;
                    } else if (item > 999) {
                        count[2] += 1;
                    }
                });
                return count;
            }
            let arr = [1,2,55,3,100, 333, 9999];
            countPower(arr); 
        `,
        discription: `
            Напишіть функцію яка знаходить в масиві двозначні(10+), трьохзначні(100+) та чотирьохзначні(1000+)  числа та повертає в масив їх кількість.<br>
            let arr = [1,2,55,3,100, 333, 9999];<br>
            let arrNew = funcName(arr);<br>
            console.log(arrNew); // [1, 2, 1]
        `
    },
    {
        name: 'Task 6',
        code: `
            let  arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
            function splitArr(arr) {
                const numbers = [];
                const strings = [];
                arr.flat(Infinity).forEach(item => {
                    if (typeof item === 'number') {
                        numbers.push(item);
                    } else if (typeof item === 'string') {
                        strings.push(item);
                    }
                });
                return [numbers, strings];
            }
            splitArr(arr);
        `,
        discription:
            `Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]<br>
            Написати функцію яка виведе нові масиви яка складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)<br>
            let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];<br>
            let arrNew = funcName(arr);<br>
            /* <br>
            [<br>
            [5, 12, 99, 2, 2, 4, 3],<br>
            [”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”<br>
            ] <br>
            */<br>`
    },
    {
        name: 'Task 7',
        code:
            `const start = [4, 3, 9];
        const middle = [3, 7, 9];
        const end = [8, 7, 6];
        function concatArr (start, middle, end, way) {
            switch (way) {
                case 1:
                    return [...start, ...middle, ...end];
                case 2:
                    return start.concat(middle, end);
                case 3:
                    return start.concat(middle).concat(end);
                case 4:
                    for (let i = 0; i < miggle.length; i++) start.push(middle[i]);
                    for (let i = 0; i < end.length; i++) start.push(end[i]);
                    return start;
                case 5:
                    for (let i of middle) start.push(i);
                    for (let i of end) start.push(i);
                    return start;
                case 6:
                    for (let i = middle.length - 1; i >= 0; i--) end.unshift(middle[i]);
                    for (let i = start.length - 1; i >= 0; i--) end.unshift(start[i]);
                    return end;
            }
        }
        concatArr(start, middle, end, 6);`,
        discription: `
        Додати на початок масиву [3, 7, 9] значенння [4, 3, 9] та на кінець масиву значення [8, 7, 6] різними способами`
    },
    {
        name: 'Task 8',
        code:
            `function sortArr(arr) {
            const sortedArr = [];
            const oddArr = [];
            const evenArr = [];
            arr.sort((a, b) => a - b).forEach(item => { item % 2 ? oddArr.push(item) : evenArr.push(item); })
            const max = oddArr.length > evenArr.length ? oddArr.length * 2 : evenArr.length * 2 - 1;
            for (let i = 0; i < max; i++) {
                if (i % 2) {
                    let oddValue = oddArr.shift();
                    sortedArr[i] = oddValue === undefined ? null : oddValue;
                } else {
                    let evenValue = evenArr.shift();
                    sortedArr[i] = evenValue === undefined ? null : evenValue;
                }
            }
            return sortedArr;
        }
        let arr = [5, 2, 4, 7, 0, 8, 9, 10]
        sortArr(arr);`,
        discription: `
        Даний масив, вибрати із нього всі парні числа, та всі непарні числа, потім проставити всі парні числа у відповідність парним індексам масиву, а непарні — непарним індексам масиву<br>
        let arr = [5, 2, 4, 7, 0, 8, 9, 10];<br>
        let arr2 = funcName(arr)<br>
        /*<br>
        index, value<br>
        0          0<br>
        1          5<br>
        2          2<br>
        3          7<br>
        4          4<br>
        5          9<br>
        6          8<br>
        7          null<br>
        8          10<br>
        */`
    },
    {
        name: 'Task 9',
        code: 
        `function getFuulname(firstname, lastname, changeCase = str => str) {
            const fullName = firstname.trim() + ' ' + lastname.trim();
            return changeCase(fullName);
        }
        function toUpperCase(str) {
            return str.toUpperCase();
        }
        function toLowerCase(str) {
            return str.toLowerCase();
        }
        function toCapitalize(str) {
            return str.split(' ').map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ');
        }
        getFuulname('  john', 'doe', toUpperCase);`,
        discription: `Напишіть функцію яка приймає 2 аргументи, ім’я та прізвище, та повертає як результат ЦІЛУ строку ім'я та прізвище.Додати додатково третій параметр - функцію яка буде переводити у певний регістр цю строку, верхній, нижній або кожне слово із великої літери(це три окремі функції мають бути) а також видаляє зайві пробели`
    },
    {
        name: 'Task 10',
        code: 
        `function checkPerson(login, password) {
            const users = [
                { login: 'admin', password: '1212' },
                { login: 'user1', password: '1111' },
                { login: 'user2', password: '2222' },
                { login: 'user3', password: '3333' },
                { login: 'user4', password: '4444' },
            ];
            const user = users.find(item => item.login === login && item.password === password);
            return user === undefined ? 'Логін або Пароль не вірний' : 'Ви авторизовані';
        }
        checkPerson('admin', '1212');`,
        discription: `Створити функцію яка приймає 2 аргументи (логін, пароль). Функція має перевіряти введені дані на наявність таких даних в масиві який є всередині цієї функції. якщо логін та пароль співпадають із даними які є в масиві тоді вивести повідомлення Ви авторизовані, інакше вивести — Логін або Пароль не вірний.`
    }
];

let dropdownMenu = document.querySelectorAll('.dropdown-item');
dropdownMenu.forEach(item => {
    item.addEventListener("click", function (event) {
        let index = event.target.dataset.index;
        console.log(event.target.dataset.index);
        myCodeMirror.setValue(taskList[index - 1].code);
        document.querySelector('.task-decription').innerHTML = taskList[index - 1].discription;
});
});
})();
