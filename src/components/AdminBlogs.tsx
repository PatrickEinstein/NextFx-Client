"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AdminBlogsBox } from "./AdminBlogsBox";
import { CurrencyTechnicalAnalysis } from "../../utils/fetches/api.fetch";
import { AdminBlogsPosts } from "../../constants";
import { useUserStore } from "@/store";

export const AdminBlogs = () => {
  const [news, SetNews] = useState([]);
  const token = useUserStore((state) => state.token);
  const load = {
    page: 1,
    pageSize: 10,
    token,
  };
  const newsGot = useCallback(async () => {
    const newNews = await CurrencyTechnicalAnalysis(load);
    SetNews(newNews);
  }, []);

  useEffect(() => {
    newsGot();
  }, []);
  return (
    <div className="grid md:grid-cols-3 gap-8 md:gap-5">
      {AdminBlogsPosts?.map(({ name, image, description }, index: number) => (
        <div key={index}>
          <AdminBlogsBox
            description={description}
            title={name}
            image={typeof image === "string" ? image : ""}
          />
        </div>
      ))}
    </div>
  );
};
