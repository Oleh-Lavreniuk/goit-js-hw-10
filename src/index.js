import './css/styles.css';

import { fetchCountries } from './js/fetchCountries';
import { renderCountriesList } from './js/createMarkup';
import { createCountryInfo } from './js/createMarkup';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputCountry: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('#search-box'),
};

refs.inputCountry.addEventListener(
  'input',
  debounce(onSearchCountries, DEBOUNCE_DELAY)
);

function onSearchCountries(ev) {
  const value = ev.target.value.trim();
  if (!value) {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
    return;
  }

  fetchCountries(value)
    .then(data => {
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (data.length <= 10 && data.length >= 2) {
        refs.countryList.innerHTML = renderCountriesList(data);
      }
      if (data.length === 1) {
        refs.countryList.innerHTML = '';
        refs.countryList.insertAdjacentHTML(
          'beforeend',
          renderCountriesList(data)
        );
        refs.countryInfo.insertAdjacentHTML(
          'beforeend',
          createCountryInfo(data)
        );
      }
      console.log('CountriesList: ', renderCountriesList(data));
      console.log('CountryInfo: ', createCountryInfo(data));
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
    });
}
