import axios, { Method, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST_BACKEND,
});
const API_KEY = "HYL9M4HOXII152WI";

const request = <T>(
  method: Method,
  url: string,
  params: any
): Promise<AxiosResponse<T>> => {
  return api.request<T>({
    method,
    url,
    params,
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFinancialItem = async (
  symbol: string,
  periodSelected: string
): Promise<any> => {
  // eslint-disable-next-line prefer-const
  let period = "";
  let functionType = "";
  if (periodSelected === "Days") {
    period = "Time Series (Daily)";
    functionType = "TIME_SERIES_DAILY";
  }
  if (periodSelected === "Weeks") {
    period = "Weekly Time Series";
    functionType = "TIME_SERIES_WEEKLY";
  }
  if (periodSelected === "Monthly") {
    period = "Monthly Time Series";
    functionType = "TIME_SERIES_MONTHLY";
  }
  const finItemSymbol: string = symbol;
  // eslint-disable-next-line prefer-const
  let financialChartXValuesFunction = [];
  // eslint-disable-next-line prefer-const
  let financialChartCloseValuesFunction = [];
  // eslint-disable-next-line prefer-const
  let financialChartOpenValuesFunction = [];
  // eslint-disable-next-line prefer-const
  let financialChartHighValuesFunction = [];
  // eslint-disable-next-line prefer-const
  let financialChartLowValuesFunction = [];

  try {
    await fetch(
      `https://www.alphavantage.co/query?function=${functionType}&symbol=${finItemSymbol}&outputsize=compact&apikey=${API_KEY}`
    )
      // eslint-disable-next-line func-names
      .then(function (response) {
        return response.json();
      })
      // eslint-disable-next-line func-names
      .then(function (data) {
        console.log(data);

        Object.entries(data[period]).forEach(([key, value]) => {
          financialChartXValuesFunction.push(key);
          financialChartCloseValuesFunction.push(data[period][key]["4. close"]);
          financialChartOpenValuesFunction.push(data[period][key]["1. open"]);
          financialChartHighValuesFunction.push(data[period][key]["2. high"]);
          financialChartLowValuesFunction.push(data[period][key]["3. low"]);
        });
      });
  } catch (e) {
    console.log(e);
  }
  const financialItem = {
    symbol: finItemSymbol,
    financialChartXValues: financialChartXValuesFunction,
    financialChartCloseValues: financialChartCloseValuesFunction,
    financialChartOpenValues: financialChartOpenValuesFunction,
    financialChartHighValues: financialChartHighValuesFunction,
    financialChartLowValues: financialChartLowValuesFunction,
  };
  return financialItem;
};

export const getStocksData = async (symbolName: string): Promise<any> => {
  // eslint-disable-next-line prefer-const
  let stockData;
  try {
    await fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbolName}&apikey=${API_KEY}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        stockData = data;
      });
  } catch (e) {
    console.log(e);
  }
  return stockData;
};

export default request;
