"use client";

import React, { useCallback, useEffect, useState } from "react";
import { CalendarNews } from "../../utils/fetches/api.fetch";
import { CalendarBox } from "./CalenderBox";

export const Calendar = () => {
  var nowMonth = new Date().getMonth() + 1;
  var nowDay = new Date().getDate();

  const [news, SetNews] = useState([]);

  const newsGot = useCallback(async () => {
    const newNews = await CalendarNews();
    console.log(`news==>`, newNews);
    SetNews(newNews?.symbols);
  }, []);

  useEffect(() => {
    newsGot();
  }, []);

  return (
    <div className="mt-5 mb-5 justify-center md:w-2/5">
      <div className="shadow-2xl shadow-blue-500/50 w-full pl-6">
        <h2 className="text-yellow-400 font-bold text-3xl">
          {nowDay}/{nowMonth}
        </h2>
        <h2 className="text-black font-bold text-5xl">News Calendar</h2>
        <h2 className="">Today&apos;s important economic data releases</h2>
      </div>
      <div className="grid md:grid-cols-1 gap-2 md:gap-2">
        {news?.map(
          (
            {
              name,
              image,
              dateUtc,
              party,
              countryCode,
              currencyCode,
              volatility,
              Actual,
              forcast,
              previous,
              consensus,
            },
            index: number
          ) => (
            <div key={index}>
              <CalendarBox
                name={name}
                image={image}
                period={dateUtc}
                party={party}
                country={countryCode}
                currencyCode={currencyCode}
                impact={volatility}
                Actual={Actual}
                forcast={forcast}
                previous={previous}
                consensus={consensus}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
