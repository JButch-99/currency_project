import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyAPI from './api';
import {changeAmount, changeGlobalVariable,resetValues, convertValues, getGlobalVariable, getUSD, getGlobalName, changeGlobalName} from './calculation';
const usdDisplay = document.getElementById("usd");
const targetType = document.getElementById("type");
const targetAmount = document.getElementById("amount"); 
const usdInputButton = document.getElementById("usdInput");
const resetButton = document.getElementById("resetArray");
const submitButton = document.getElementById("submitAll");
const resultsP = document.getElementById("results");
const loggedResults = document.getElementById("logs");

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

submitButton.addEventListener("click", function() {
  const amount = getUSD();
  const variableAmount = getGlobalVariable();
  const variableName = getGlobalName();
  
  if (!isNaN(amount) && !isNaN(variableAmount) && amount > 0) {
    const results = convertValues();
    resultsP.textContent = `${variableAmount} ${variableName}'s value in USD is: ${results} ${variableName}!`
    updateCurrencyLog(amount, variableAmount, variableName, results);
  }
})

function updateCurrencyLog(amount, variable, variableName, results) {
  const li = document.createElement("li");
  li.textContent = `USD: ${amount} / ${variableName}: ${variable} / ${variableName}: ${results}`
  loggedResults.append(li);
}



resetButton.addEventListener("click", function() {
  resetCurrencyInfo();
  resetValues();
  loggedResults.textContent = "";
});

function resetCurrencyInfo() {
  targetAmount.textContent = "";
  targetType.textContent = "";
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
      changeGlobalVariable(value);
      changeGlobalName(key);
      updateCurrencyInfo(value, key);
    });

    li.append(button);
    infoBox1.append(li);
  }
}

