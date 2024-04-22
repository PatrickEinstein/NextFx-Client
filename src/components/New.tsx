"use client";

import { useCallback, useEffect, useState } from "react";
import { posts } from "../../constants";
import { CurrencyNews } from "../../utils/fetches/api.fetch";
import { useUserStore } from "@/store";

export const New = () => {
  const [news, SetNews] = useState([]);
  const token = useUserStore((state) => state.token);

  let load = {
    page: 1,
    pageSize: 10,
    token,
  };
  const newsGot = useCallback(async () => {
    const newNews = await CurrencyNews(load);
    console.log(`news==>`, newNews?.message);

    if (newNews?.message === "Failed to fetch") {
      return;
    }
    SetNews(newNews?.message.slice(0, 5));
  }, []);

  useEffect(() => {
    newsGot();
  }, []);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                _id,
              },
              index: number
            ) => (
              <article
                // key={post.id}
                key={_id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <img
                    // src={post.imageUrl}
                    src={picture}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    {/* <time dateTime={post.datetime} className="text-gray-500"> */}
                    <time dateTime={post_time_utc} className="text-gray-500">
                      {post_time_utc}

                      {/* {post.date} */}
                    </time>
                    <a
                      // href={post.category.href}
                      href={name}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {/* {post.category.title} */}
                      {article_title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      {/* <a href={post.href}> */}
                      <a href={article_url}>
                        <span className="absolute inset-0" />
                        {/* {post.title} */}
                        {article_title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {/* {post.description} */}
                      {description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={article_photo_url}
                      // src={post.author.imageUrl}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-100"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        {/* <a href={post.author.href}> */}
                        {/* <a href={post.author.href}> */}
                        <a>
                          <span className="absolute inset-0" />
                          {index === 0
                            ? "Jeremy Thomas"
                            : index === 1
                            ? "Jane Clarkson"
                            : index === 2
                            ? "Gabriel Russell"
                            : index === 3
                            ? "Lindsay Walton"
                            : index === 4
                            ? "Shekinah Arthur"
                            : "Lindsay Walton"}
                        </a>
                      </p>
                      {/* <p className="text-gray-600">{post.author.role}</p> */}
                      <p className="text-gray-600">Beginner</p>
                    </div>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </div>
  );
};
