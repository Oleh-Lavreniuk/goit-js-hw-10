function createCountryList(acc, { name, flags }) {
  return (
    acc +
    `<li class="country-list__item">
      <img class="country-list__flag" src="${flags.svg}" alt="${name.official}" width="50" />
      <h2 class="country-list__name">${name.common}</h2>
    </li>`
  );
}

export function renderCountriesList(array) {
  return array.reduce(createCountryList, '');
}

export function createCountryInfo(country) {
  return country
    .map(({ capital, population, languages }) => {
      // const { capital, population, languages } = country;
      const lang = Object.values(languages).join(', ');
      // const lang = languages.map(language => language.name).join(', ');

      return `    
        <ul class="country-info__list">
          <li class="country-info__item"><b>Capital:</b> ${capital}</li>
          <li class="country-info__item"><b>Population:</b> ${population}</li>
          <li class="country-info__item"><b>Languages:</b> ${lang}</li>
        </ul>
        `;
    })
    .join('');
}
