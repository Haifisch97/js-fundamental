function compact (array) {
    const compactedArray = [];
    array.forEach(element => compactedArray.includes(element) ? null : compactedArray.push(element));
    return compactedArray;
};
function createArray(start, end) {
    const array = [];
    for (let i = start; i <= end; i++) array.push(i);
    return array;
};
const trimSpace = (str) => str.replace(/\s+/g, ' ').trim();