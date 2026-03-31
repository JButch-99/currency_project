import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyAPI from './api';
import { convertValues } from './calculation';
import { checkGlobalArray, addGlobalArray, clearGlobalArray, globalArray } from './handleGlobalArray';

document.addEventListener("DOMContentLoaded", async function() {
  const request = await CurrencyAPI.getCurrencyInfo();
  if (request.result === `success`) {
    createList(request);
  } 
});



function createList(source) {
  const list = source["conversion_rates"];
  const newList = Object.entries(list);
  const infoBox1 = document.getElementById("menu");
  
  for (const [key, value] of newList) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.value = value;
    button.textContent = key;
    button.addEventListener("click", function(key, value) {
      
    })
  }
}

