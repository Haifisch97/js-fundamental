const input = document.querySelector('.task-three-input');
const button = document.querySelector('.task-three-btn');
const result = document.querySelector('.task-three-output');


button.addEventListener('click', () => {
let email = input.value;
const reg = /^[a-zA-Z0-9]+\w*-?\w*@[a-z]{2,}(?:.[a-z]{2,}){1,2}$/;

 if (reg.test(email)) {
    result.textContent = 'Введений емейл відповідає вимогам';
  
 } else {
    result.textContent = 'Введений емейл не відповідає вимогам';
}
});
