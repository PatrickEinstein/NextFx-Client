"use client";

import { useUserStore } from "@/store";
import { HttpGetCallerWhole, HttpOTHERcaller } from "../index";

// const baseUrl = "http://localhost:5000";
const baseUrl = "https://forexserver.onrender.com";

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
  token: string | null;
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
  token: string | null;
};
export const GetCourseAndChapters = async ({
  courseId,
  token,
}: ThisCourseAndChapter) => {
  const res = await HttpGetCallerWhole(`${baseUrl}/api/course/${courseId}`, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
  return res;
};

export const GetChapter = async ({ courseId, token }: ThisCourseAndChapter) => {
  const res = await HttpGetCallerWhole(`${baseUrl}/get/Video/${courseId}`, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
  return res;
};

export const GetSomeCHapters = async ({ page, pageSize, token }: Props) => {
  const res = await HttpGetCallerWhole(
    `${baseUrl}/api/resources/getAllVideos/${page}/${pageSize}`,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  );
  return res;
};

export const GetCourses = async ({ page, pageSize, token }: Props) => {
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
  token,
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
  token: string | null;
};

export const GetAnArticle = async ({ article, id, token }: Article) => {
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
  token,
  user,
}: {
  descriptions: string;
  token: string | null;
  user: string | null;
}) => {
  const res = await HttpOTHERcaller(
    `${baseUrl}/api/paypal/create`,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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
  token,
  user,
}: {
  descriptions: string;
  token: string | null;
  user: string | null;
}) => {
  const res = await HttpOTHERcaller(
    `${baseUrl}/api/stripe/create`,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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
  token,
  user,
}: {
  descriptions: string;
  token: string | null;
  user: string | null;
}) => {
  const res = await HttpOTHERcaller(
    `${baseUrl}/api/PelPay`,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    "POST",
    {
      amount: 100,
      userId: user,
      currency: "USD",
      merchantRef: "13277654324537993",
      narration: descriptions,
      callBackUrl: `${baseUrl}/api/pelpaycallback`,
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

export const GetUserById = async (
  token: string | null,
  user: string | null
) => {
  const res = await HttpGetCallerWhole(`${baseUrl}/get/user/${user}`, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
  return res;
};
export const FetchUserRegisteredCourses = async (
  token: string | null,
  user: string | null
) => {
  const res = await HttpGetCallerWhole(`${baseUrl}/get/userCourses/${user}`, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
  return res;
};

export const FetchTransactionStatus = async (
  transactionId: string,
  token: string | null
) => {
  const res = await HttpGetCallerWhole(
    `${baseUrl}/get/transaction/${transactionId}`,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  );
  return res;
};

export const GetGlossary = async (params: string) => {
  const res = await HttpGetCallerWhole(
    `https://www.babypips.com/forexpedia/${params}.json`,
    {}
  );
  return res;
};

export const VerifyToken = async (otp: string, user: string) => {
  const res = await HttpGetCallerWhole(
    `${baseUrl}/verify-otp?user=${user}&otp=${otp}`,
    {
      "Content-Type": "application/json",
    }
  );
  return res;
};
