import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');

const onInputName = event => {
  const searchName = event.target.value.trim();
  if (searchName.length > 0) {
    fetchCountries(searchName)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log('Такої країни не існує!');
        return;
      });
  } else {
    console.log('Введите страну');
  }
};

inputEl.addEventListener('input', debounce(onInputName, DEBOUNCE_DELAY));
