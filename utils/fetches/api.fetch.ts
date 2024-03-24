import { HttpGetCallerWhole } from "../index";

const baseUrl = "http://localhost:8055";

type Props = {
  page: number;
  pageSize: number;
};
export const CurrencyTechnicalAnalysis = async ({ page, pageSize }: Props) => {
  const res = await HttpGetCallerWhole(
    `${baseUrl}/api/resources/getAllNews/${page}/${pageSize}`,
    {
      "Content-Type": "application/json",
    }
  );
  return res;
};
export const CurrencyNews = async ({ page, pageSize }: Props) => {
  const res = await HttpGetCallerWhole(
    `${baseUrl}/api/resources/getAllNews/${page}/${pageSize}`,
    {
      "Content-Type": "application/json",
    }
  );
  return res;
};
export const Threads = async ({ page, pageSize }: Props) => {
  const res = await HttpGetCallerWhole(
    `${baseUrl}/api/resources/getAllThreads/${page}/${pageSize}`,
    {
      "Content-Type": "application/json",
    }
  );
  return res;
};
