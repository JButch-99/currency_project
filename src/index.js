import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyAPI from './api';
import { convertValues } from './calculation';

document.addEventListener("DOMContentLoaded", async function() {
  const request = await CurrencyAPI.getCurrencyInfo();
  if (request.result === `success`) {
    createList(request);
  } 
});

function createList(source) {
  const list = source["conversion_rates"];
  const newList = Object.entries(list);
  
  newList.forEach((key, value) => {

  });
}

