const clickButton = document.querySelector('.task-one-btn');
const output = document.querySelector('.task-one-output');

clickButton.addEventListener('click', () => {
    output.textContent = 'I was pressed!';
});

clickButton.addEventListener('mouseover', () => {
    output.textContent = 'Mouse on me!';
});

clickButton.addEventListener('mouseout', () => {
    output.textContent = 'Mouse is not on me!';
});
