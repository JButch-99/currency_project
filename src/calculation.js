let usdAmount = 0; 
let globalVariable = 0;
let globalVariableName = "";

export function convertValues() {
  if (usdAmount !== 0 || globalVariable !== 0) {
    const result = usdAmount * globalVariable;
    return Number(result.toFixed(2));
  }
}

export function changeAmount(amount) {
  return usdAmount = Number(amount);
}

export function changeGlobalVariable(value) {
  return globalVariable = Number(value);
}

export function resetValues() {
  globalVariable = 0;
  usdAmount = 0;
  globalVariableName = ""
}

export function changeGlobalName(name) {
  return globalVariableName = name;
}

export function getGlobalVariable() {
  return globalVariable;
}

export function getGlobalName() {
  return globalVariableName;
}

export function getUSD() {
  return usdAmount;
}


