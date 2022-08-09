function createCountryList(acc, country) {
  return (
    acc +
    `<li>
      <img src="${country.flags.svg}" alt="${country.name.official}" width="50" />
      <h2>${country.name.common}</h2>
    </li>`
  );
}

export function renderCountriesList(array) {
  return array.reduce(createCountryList, '');
}

export function createCountryInfo(country) {
  const lang = country.languages.map(language => language.name).join();

  return `<img src="${country.flags.svg}" 
      alt="${country.name.official}" width="50" />
    <h2>${country.name.common}</h2>
    <p><b>Capital</b>: ${country.capital[0]}</p>
    <p><b>Population</b>: ${country.population}</p>
    <p><b>Languages</b>: ${lang}</p>`;
}
