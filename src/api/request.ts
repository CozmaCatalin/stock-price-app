import axios, { Method, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST_BACKEND,
});

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
export const getFinancialItem = async (symbol): Promise<any> => {
  const API_KEY = "HYL9M4HOXII152WI";
  const finItemSymbol = symbol;
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
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${finItemSymbol}&outputsize=compact&apikey=${API_KEY}`
    )
      // eslint-disable-next-line func-names
      .then(function (response) {
        return response.json();
      })
      // eslint-disable-next-line func-names
      .then(function (data) {
        console.log(data);

        Object.entries(data["Time Series (Daily)"]).forEach(([key, value]) => {
          financialChartXValuesFunction.push(key);
          financialChartCloseValuesFunction.push(
            data["Time Series (Daily)"][key]["4. close"]
          );
          financialChartOpenValuesFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
          financialChartHighValuesFunction.push(
            data["Time Series (Daily)"][key]["2. high"]
          );
          financialChartLowValuesFunction.push(
            data["Time Series (Daily)"][key]["3. low"]
          );
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

export default request;
