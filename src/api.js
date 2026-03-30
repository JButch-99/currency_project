export default class CurrencyAPI {
  static async getCurrencyInfo() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_Key}/latest/USD`);
      const resultJson = await response.json();
      if (resultJson.result === "error") {
        console.log(resultJson);
        const newError = `${resultJson.result} /// ${resultJson["error-type"]}`
        throw new Error(newError);
      } else if (!response.ok) {
        throw new Error(`ERROR: ${resultJson.message}`)
      }
      return resultJson;
    } catch(error) {
      return error;
    }
  }
}