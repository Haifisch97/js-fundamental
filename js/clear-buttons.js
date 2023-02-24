(function () {

const cealrConsole = document.querySelector('.btn-clear-console');

cealrConsole.addEventListener('click', () => {
    let console = document.querySelector('.console');
    console.innerHTML = '';
});

})();