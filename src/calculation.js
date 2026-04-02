let usdAmount = 0; 
let globalVariable = 0;

export function convertValues() {
  const result = usdAmount * globalVariable;
  if (usdAmount !== 0 || globalVariable !== 0) {
    return Number(result.toFixed(2));
  }
}

export function changeAmount(amount) {
  return usdAmount = Number(amount);
}

export function changeGlobalVariable(value) {
  return globalVariable = Number(value);
}

