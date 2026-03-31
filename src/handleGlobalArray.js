export const globalArray = []; 

export function addGlobalArray(item) {
  if (globalArray.length < 2) {
    globalArray.push(item);
  } else {
    return;
  }
}

export function clearGlobalArray() {
  globalArray.length = 0;
}

export function checkGlobalArray() {
  return globalArray.length === 2;
}
