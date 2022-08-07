import './css/styles.css';

import { fetchCountries } from './js/fetchCountries';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputCountry = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('#search-box');

inputCountry.addEventListener(
  'input',
  debounce(onSearchCountries, DEBOUNCE_DELAY)
);

function onSearchCountries(ev) {
  fetchCountries(ev.target.value)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}
