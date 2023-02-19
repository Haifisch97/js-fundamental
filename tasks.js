//1
function compact(array) {
    const compactedArray = [];
    array.forEach(element => compactedArray.includes(element) ? null : compactedArray.push(element));
    return compactedArray;
};
//2
function createArray(start, end) {
    const array = [];
    for (let i = start; i <= end; i++) array.push(i);
    return array;
};
//3
const trimSpace = (str) => str.replace(/\s+/g, ' ').trim();
//4
function filterByAge(arr, min = 18) {
    return arr.filter(item => item.age >= min);
}
//5
function countPower(arr) {
    const count = new Array(3).fill(0);
    arr.forEach(item => {
        if (item.power > 9 && item.power < 100) {
            count[0] += 1;
        } else if (item.power > 99 && item.power < 1000) {
            count[1] += 1;
        } else if (item.power > 999) {
            count[2] += 1;
        }
    });
    return count;
}

//6
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
//7
const start = [4, 3, 9];
const middle = [3, 7, 9];
const end = [8, 7, 6];
//7.1
const result1 = [...start, ...middle, ...end];
//7.2
const result2 = start.concat(middle, end);
//7.3
const result3 = start.concat(middle).concat(end);
//7.4
for (let i = 0; i < start.length; i++) start.push(middle[i]);
for (let i = 0; i < end.length; i++) start.push(end[i]);
const result4 = start;
//7.5
for (let i of middle) start.push(i);
for (let i of end) start.push(i);
const result5 = start;
//7.6
for (let i = middle.length - 1; i >= 0; i--) end.unshift(middle[i]);
for (let i = start.length - 1; i >= 0; i--) end.unshift(start[i]);
//8
function sortArr(arr) {
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
//9
function getFuulname(firstname, lastname, changeCase = str => str) {
    const fullName = `${firstname.trim()} ${lastname.trim()}`;
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
//10
function checkPerson(login, password) {
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
