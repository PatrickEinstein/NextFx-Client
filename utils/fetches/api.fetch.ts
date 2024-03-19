import { HttpGetCallerWhole } from "../index";

export const CurrencyNews = async () => {
  const res = await HttpGetCallerWhole(
    "https://real-time-finance-data.p.rapidapi.com/currency-news?from_symbol=USD&to_symbol=EUR&language=en",
    {
      "X-RapidAPI-Key": "8d0157f9a3msh2fc5c9d26953747p11e428jsn208ebf097595",
      "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
    }
  );
  return res;
};

export const CurrencyTechnicalAnalysis = async () => {
  const res = await HttpGetCallerWhole(
    "https://forex-factory-scraper1.p.rapidapi.com/latest_technical_analysis_news",
    {
      "X-RapidAPI-Key": "8d0157f9a3msh2fc5c9d26953747p11e428jsn208ebf097595",
      "X-RapidAPI-Host": "forex-factory-scraper1.p.rapidapi.com",
    }
  );
  return res;
};

export const CalendarNews = async () => {
  const res = await HttpGetCallerWhole(
    "https://forex-api2.p.rapidapi.com/economic-calendar?includeVolatilities=NONE%3BLOW%3BMEDIUM%3BHIGH",
    {
      "X-RapidAPI-Key": "8d0157f9a3msh2fc5c9d26953747p11e428jsn208ebf097595",
      "X-RapidAPI-Host": "forex-api2.p.rapidapi.com",
    }
  );
  return res;
};
