export default class CurrencyAPI {
  static async getCurrencyInfo() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_Key}/latest/USD`);
      const jsonResponse = await response.json();
      if (!response.ok) {
        const newError = `${jsonResponse.result} /// ${jsonResponse["error-type"]}`
        throw new Error(newError);
      }

      return jsonResponse;
    } catch(error) {
      return {
        success: false,
        error: error.message
      }
    }
  }
}