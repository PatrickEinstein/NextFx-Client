"use client";
import React, { useCallback, useEffect, useState } from "react";
import { NewsBlogsBox } from "./NewsBlogsBox";
import { CurrencyNews } from "../../utils/fetches/api.fetch";

export const NewBlogs = () => {
  const [news, SetNews] = useState([]);
  let load = {
    page: 1,
    pageSize: 10,
  };
  const newsGot = useCallback(async () => {
    const newNews = await CurrencyNews(load);
    console.log(`news==>`, newNews?.message);
    SetNews(newNews?.message);
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
            picture,
          },
          index: number
        ) => (
          <div key={index}>
            <NewsBlogsBox
              description={description}
              title={article_title}
              image={picture}
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
