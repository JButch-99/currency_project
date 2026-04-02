import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyAPI from './api';
import {changeAmount, changeGlobalVariable, convertValues} from './calculation';
const usdDisplay = document.getElementById("usd");
const targetType = document.getElementById("type");
const targetAmount = document.getElementById("amount"); 
const usdInputButton = document.getElementById("usdInput");
const resetButton = document.getElementById("resetArray");
document.addEventListener("DOMContentLoaded", async function() {
  const request = await CurrencyAPI.getCurrencyInfo();
  if (request.result === `success`) {
    createList(request);
  } 
});

usdInputButton.addEventListener("click", function() {
  usdDisplay.textContent = "";
  const usdValue = document.getElementById("usdAmount").value;
  const value = Number(usdValue);
  changeAmount(value);
  usdDisplay.textContent = value;
});

resetButton.addEventListener("click", function() {
  resetCurrencyInfo();
});

function resetCurrencyInfo() {
  targetAmount.textContent = "";
  targetType.textContent = "";
  usdDisplay.textContent = "";
  changeAmount(0);
  changeGlobalVariable(0);
}

function updateCurrencyInfo(key, value) {
  targetAmount.textContent = value;
  targetType.textContent = key;
}

function createList(source) {
  const list = source["conversion_rates"];
  const newList = Object.entries(list);
  const infoBox1 = document.getElementById("menu");
  
  for (const [key, value] of newList) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.value = value;
    button.textContent = key;
    button.addEventListener("click", function() {
      resetCurrencyInfo();
      changeGlobalVariable(button.value);
      updateCurrencyInfo(value, key);
    });

    li.append(button);
    infoBox1.append(li);
  }
}

