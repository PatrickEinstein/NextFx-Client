"use client";

import { HttpGetCallerWhole } from "../index";

// const baseUrl = "http://localhost:5000";
 const baseUrl = "https://fxserver-1.onrender.com";

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

type Props = {
  page?: number;
  pageSize?: number;
  courseId?: string;
  chapterId?: string;
};
export const CurrencyTechnicalNews = async ({ page, pageSize }: Props) => {
  const res = await HttpGetCallerWhole(
    `${baseUrl}/api/resources/getAllNews/${page}/${pageSize}`,
    {
      "Content-Type": "application/json",
    }
  );
  return res;
};

export const CurrencyTechnicalAnalysis = async ({ page, pageSize }: Props) => {
  const res = await HttpGetCallerWhole(
    `${baseUrl}/api/resources/getAllAnalyses/${page}/${pageSize}`,
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
export const Courses = async ({ page, pageSize }: Props) => {
  const res = await HttpGetCallerWhole(
    `${baseUrl}/api/resources/getAllCourses/${page}/${pageSize}`,
    {
      "Content-Type": "application/json",
    }
  );
  return res;
};
type ThisCourseAndChapter = {
  courseId : string
}
export const GetCourseAndChapters = async ({ courseId }: ThisCourseAndChapter) => {
  const res = await HttpGetCallerWhole(
    `${baseUrl}/api/course/${courseId}`,
    {
      "Content-Type": "application/json",
    }
  );
  return res;
};

export const GetSomeCHapters = async ({  page, pageSize }: Props) => {
  const res = await HttpGetCallerWhole(
    `${baseUrl}/api/resources/getAllVideos/${page}/${pageSize}`,
    {
      "Content-Type": "application/json",
    }
  );
  return res;
};