"use client";

import React, { useCallback, useEffect, useState } from "react";
import { NewsBlogsBox } from "./NewsBlogsBox";
import { CurrencyNews } from "../../utils/fetches/api.fetch";
import { NewsBlogsPosts } from "../../constants";

export const NewBlogs = () => {
  const [news, SetNews] = useState([]);

  const newsGot = useCallback(async () => {
    const newNews = await CurrencyNews();
    console.log(`news==>`, newNews?.data?.news);
    SetNews(newNews?.data?.news);
  }, []);

  useEffect(() => {
    newsGot();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap mt-10">
      {news?.map(
        (
          {
            name,
            article_title,
            description,
            article_photo_url,
            post_time_utc,
            article_url,
            image,
          },
          index: number
        ) => (
          <div key={index}>
            <NewsBlogsBox
              description={description}
              title={article_title}
              image={article_photo_url}
              // image={image}
              article_url={article_url}
              post_time_utc={post_time_utc}
            />
          </div>
        )
      )}
    </div>
  );
};
