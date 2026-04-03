import { changeAmount, changeGlobalName, changeGlobalVariable,convertValues, resetValues, getGlobalName, getUSD, getGlobalVariable} from "../src/calculation";

describe('convertValues', ()=> {
  test('should be able to calculate between two values', () => {
    changeAmount(5);
    changeGlobalVariable(5);
    const test = convertValues();
    expect(test).toEqual(25)
  });
});

describe('changeGlobalName', () => {
  test('change the global variable name', () => {
    changeGlobalName("David");
    expect(getGlobalName()).toBe("David");
  })
})

describe('changeAmount', ()=> {
  test('should be able to set amount to given value', () => {
    const test = changeAmount(5);
    expect(test).toEqual(5);
  })
});

describe('changeGlobalVariable', () => {
  test('should change the global variable value', () => {
    changeGlobalVariable(5);
    expect(getGlobalVariable()).toBe(5);
  });
});

describe('resetValues', () => {
  test('should reset values in globalVariable and usdAmount', () => {
    changeAmount(5);
    changeGlobalVariable(5);
    changeGlobalName("test");
    resetValues();
    expect(getGlobalVariable()).toBe(0);
    expect(getUSD()).toBe(0);
    expect(getGlobalName()).toBe("");
  });
});

describe('getUSD', () => {
  test('should return usdAmount value', () => {
    changeAmount(5);
    expect(getUSD()).toBe(5);
  })
});

describe('getGlobalVariable', () => {
  test('should return variable value', () => {
    changeGlobalVariable(5);
    expect(getGlobalVariable()).toBe(5);
  });
});

describe('getGlobalName', () => {
  test('should return variableName', () => {
    changeGlobalName("David");
    expect(getGlobalName()).toBe("David")
  });
});