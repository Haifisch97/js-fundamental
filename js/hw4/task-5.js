// Зверстати форму наведене зправа 
// При кліку на Create Account перевірити:<br>
// - чи заповнені всі поля та чи поставлена галочка в полі checkbox<br>
// - перевірити чи значення в полі Password та Confirm Password співпадають, якщо все вірно то вивести повідомлення нижче кнопки Create Account<br>
// - зробити валідацію fullName, яке має складатись мінімум із 2-х слів<br>
// - зробити валідацію електронної пошти по типу як ми робили в темі по regExp<br>
// - зробити валідацію паролю як в задачі №5 практичного дзвінка<br>
// - зробити валідацію телефонного номеру щоб він був в форматі +00-000-000-00-00, але щоб не підпадали(тобто не проходили валідацію) номери телефонів із кодом країни +375 та +7<br>

const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const phone = document.getElementById('phone');
const checkbox = document.getElementById('flexCheckDefault');
const createAccount = document.getElementById('createAccount');

const checkFullName = () => {
    let checked = (/\s/).test(fullName.value);
    if (!checked) {
        fullName.style.border = '1px solid red';
    } else {
        fullName.style.border = '1px solid green';
    }
    return checked;
}

const checkEmail = () => {
    let checked = (/^[a-zA-Z0-9]+\w*-?\w*@[a-z]{2,}(?:.[a-z]{2,}){1,2}$/).test(email.value);
    if (!checked) {
        email.style.border = '1px solid red';
    } else {
        email.style.border = '1px solid green';
    }
    return checked;
}

const checkPassword = () => {
    let checked = password.value === confirmPassword.value;
    if (!checked) {
        confirmPassword.style.border = '1px solid red';
    } else {
        confirmPassword.style.border = '1px solid green';
    }
    return checked;
}

const checkPhone = () => {
    let checked = (/^\+(?!375|7)(?:[- ]?\d){12}$/).test(phone.value);
    if (!checked) {
        phone.style.border = '1px solid red';
    } else {
        phone.style.border = '1px solid green';
    }
    return checked;
}

const checkCheckbox = () => {
    return checkbox.checked;
}

createAccount.addEventListener('click', (e) => {
    e.preventDefault();
    if (checkFullName() && checkEmail() && checkPassword() && checkPhone() && checkCheckbox()) {
         alert('Дані введені правильно');   
    } else {
        alert('Перевірте правильність введених даних');
    }
});

fullName.addEventListener('blur', checkFullName);
email.addEventListener('blur', checkEmail);
phone.addEventListener('blur', checkPhone);
confirmPassword.addEventListener('blur', checkPassword);