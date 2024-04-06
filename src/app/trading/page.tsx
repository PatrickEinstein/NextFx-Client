"use client";
import React, { useCallback, useEffect, useState } from "react";
import { CurrencyNews } from "../../../utils/fetches/api.fetch";
import { Navbar } from "@/components";
import Footer from "@/components/NewFooter";
import { AnalysisHero } from "../analysis/_components/AnalysisHero";
import { TradingSkeleton } from "./_components/TradingSkeleton";

const Trading = () => {
  const [news, SetNews] = useState([]);
  const [loading, setLoading] = useState(true);
  let load = {
    page: 1,
    pageSize: 10,
  };
  const newsGot = useCallback(async () => {
    setLoading(true);
    const newNews = await CurrencyNews(load);
    if (newNews?.message === "Failed to fetch") {
      setLoading(false);
      return;
    }
    SetNews(newNews?.message.slice(0, 5));
    setLoading(false);
  }, []);

  useEffect(() => {
    newsGot();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bg-white pb-24 sm:pb-32">
        <AnalysisHero
          headerText="TRADING"
          subText="Trades and markup by various individuals and institution might
              just be what you need for motivation"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {loading === false && (
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {news?.map(
                (
                  {
                    name,
                    title,
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
                        <time
                          dateTime={post_time_utc}
                          className="text-gray-500"
                        >
                          {post_time_utc}

                          {/* {post.date} */}
                        </time>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          {/* <a href={post.href}> */}
                          <a href={`News/${_id}`}>
                            <span className="absolute inset-0" />
                            {/* {post.title} */}
                            {title}
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
                              PATRICK
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
          )}

          {loading === true && (
            <div className="w-full">
              <TradingSkeleton />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trading;
