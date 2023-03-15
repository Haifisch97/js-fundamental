const chekedText = document.querySelector('.task-four-input');
const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_#!]).{8,}$/;

chekedText.addEventListener('input', function () {
    if (regexp.test(chekedText.value)) {
        chekedText.style.backgroundColor = 'green';
    } else {
        chekedText.style.backgroundColor = 'red';
    }
});