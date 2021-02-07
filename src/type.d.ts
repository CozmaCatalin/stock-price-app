interface IArticle {
  id: number;
  title: string;
  body: string;
}

interface ISymbol {
  "1. symbol": string;
  "2. name": string;
  "3. type": string;
  "4. region": string;
  "5. marketOpen": string;
  "6. marketClose": string;
  "7. timezone": string;
  "8. currency": string;
  "9. matchScore": string;
}

interface ISymbols {
  bestMatches: Array<ISymbol> | undefined;
  Note: string | undefined;
}

interface IFinancialItem {
  symbol: string;
  financialChartXValues: Array<string>;
  financialChartCloseValues: Array<string>;
  financialChartOpenValues: Array<string>;
  financialChartHighValues: Array<string>;
  financialChartLowValues: Array<string>;
  Note: string;
}

interface INote {
  Note: string;
}
