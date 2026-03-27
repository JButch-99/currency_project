export function convertValues(usd, value) {
  const result = usd * value;
  return Number(result.toFixed(2));
}