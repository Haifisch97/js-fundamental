const ukrCity = ['Київ', 'Харків', 'Одеса', 'Дніпро', 'Львів', 'Тернопіль', 'Житомир', 'Херсон', 'Хмельницький', 'Черкаси', 'Чернівці'];
const usaCity = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'San Diego', 'Dallas'];
const gerCity = ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen'];

const country = document.getElementById('country');

const city = document.getElementById('city');

const outputText = document.querySelector('.task-two-output');

country.addEventListener('change', function () {
    city.innerHTML = '';
    let selectedCountry = country.value;
    let selectedCity = [];
    switch (selectedCountry) {
        case 'ukr':
            selectedCity = ukrCity;
            break;
        case 'usa':
            selectedCity = usaCity;
            break;
        case 'ger':
            selectedCity = gerCity;
            break;
    }
    selectedCity.forEach(element => {
        let option = document.createElement('option');
        option.textContent = element;
        city.add(option);
    }); 
});

city.addEventListener('change', function () {
    let countryIndex = country.selectedIndex;
    let counrtyName = country.options[countryIndex].text;
       outputText.textContent = `Ви обрали країну: ${counrtyName}, місто: ${city.value}`;
});
