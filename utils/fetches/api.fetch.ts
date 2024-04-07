"use client";

import { HttpGetCallerWhole, HttpOTHERcaller } from "../index";

const token = sessionStorage.getItem("token");
const user = sessionStorage.getItem("user");
const baseUrl = "http://localhost:5000";
//  const baseUrl = "https://fxserver-1.onrender.com";

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
  courseId: string;
};
export const GetCourseAndChapters = async ({
  courseId,
}: ThisCourseAndChapter) => {
  const res = await HttpGetCallerWhole(`${baseUrl}/api/course/${courseId}`, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
  return res;
};

export const GetChapter = async ({ courseId }: ThisCourseAndChapter) => {
  const res = await HttpGetCallerWhole(`${baseUrl}/get/Video/${courseId}`, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
  return res;
};

export const GetSomeCHapters = async ({ page, pageSize }: Props) => {
  const res = await HttpGetCallerWhole(
    `${baseUrl}/api/resources/getAllVideos/${page}/${pageSize}`,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  );
  return res;
};

export const GetCourses = async ({ page, pageSize }: Props) => {
  const res = await HttpGetCallerWhole(
    `${baseUrl}/api/resources/getAllCourses/${page}/${pageSize}`,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  );
  return res;
};

export const GetChaptersByCourseID = async ({
  courseId,
}: ThisCourseAndChapter) => {
  const res = await HttpGetCallerWhole(`${baseUrl}/api/course/${courseId}`, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
  return res;
};

type Article = {
  article?: string;
  id?: string;
};

export const getAnArticle = async ({ article, id }: Article) => {
  const res = await HttpGetCallerWhole(`${baseUrl}/get/${article}/${id}`, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
  return res;
};

type AuthProps = {
  firstname?: string;
  lastname?: string;
  dateOfBirth?: string;
  email: string;
  password: string;
  experience?: string;
};
export const Register = async (payload: AuthProps) => {
  const res = await HttpOTHERcaller(
    `${baseUrl}/api/registerUser`,
    {
      "Content-Type": "application/json",
    },
    "POST",
    payload
  );
  return res;
};

export const Login = async (payload: AuthProps) => {
  const res = await HttpOTHERcaller(
    `${baseUrl}/api/login`,
    {
      "Content-Type": "application/json",
    },
    "POST",
    payload
  );
  return res;
};

export const PayWithPayPal = async ({
  descriptions,
}: {
  descriptions: string;
}) => {
  const res = await HttpOTHERcaller(
    `${baseUrl}/api/paypal/create`,
    {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${token}`
    },
    "POST",
    {
      amount: 100,
      currency: "USD",
      description: descriptions,
      userId: user,
    }
  );
  return res;
};

export const PayWithStripe = async ({
  descriptions,
}: {
  descriptions: string;
}) => {
  const res = await HttpOTHERcaller(
    `${baseUrl}/api/stripe/create`,
    {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${token}`
    },
    "POST",
    {
      name: "WebPips",
      productOwner: "WebPips",
      description: descriptions,
      price: 100,
      quantity: 1,
      userId: user,
    }
  );
  return res;
};

export const PayWithPelPay = async ({
  descriptions,
}: {
  descriptions: string;
}) => {
  const res = await HttpOTHERcaller(
    `${baseUrl}/api/PelPay`,
    {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${token}`
    },
    "POST",
    {
      amount: 100,
      userId: user,
      currency: "USD",
      merchantRef: "13277654324537993",
      narration: descriptions,
      callBackUrl: "http://localhost:5000/api/pelpaycallback",
      splitCode: "",
      houldTokenizeCard: false,
      customer: {
        customerId: "csg",
        customerLastName: "Chams",
        customerFirstName: "Switch",
        customerEmail: "chams@chamsswitch.com",
        customerPhoneNumber: "",
        customerAddress: "",
        customerCity: "",
        customerStateCode: "",
        customerPostalCode: "",
        customerCountryCode: "NG",
      },
      integrationKey: "3cb46eec-05f1-4173-abeb-89c8ebe625f1",
      mcc: 0,
      merchantDescription: "string",
    }
  );
  return res;
};

export const fetchUserRegisteredCourses = async () => {
  const res = await HttpGetCallerWhole(`${baseUrl}/get/userCourses/${user}`, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
  return res;
};

export const FetchTransactionStatus = async (transactionId: string) => {
  const res = await HttpGetCallerWhole(
    `${baseUrl}/get/transaction/${transactionId}`,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  );
  return res;
};
