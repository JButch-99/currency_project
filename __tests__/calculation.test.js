import { convertValues } from "../src/calculation";

describe('convertValues', ()=> {
  test('should be able to calculate between two values', () => {
    const USD = 5;
    const testCurrency = 3.6725;
    const values = convertValues(USD, testCurrency);
    expect(values).toEqual(18.36)
  });
});