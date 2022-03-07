const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayShow(data))
}
loadCountry();
const displayShow = (countries) => {
    // ekhane for of o use kora jai
    // for(const country of countries)
    const countryDiv = document.getElementById('countries');
    countries.forEach(country => {
        console.log(country.coatOfArms.png, country.coatOfArms.svg);
        const h3 = document.createElement('h3');
        h3.innerText = country.capital;
        countryDiv.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = `png:${country.coatOfArms.png} svg:${country.coatOfArms.svg}`;
        countryDiv.appendChild(p)
    });
}