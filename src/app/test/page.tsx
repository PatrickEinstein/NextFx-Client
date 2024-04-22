// "use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { GetGlossary } from "../../../utils/fetches/api.fetch";
import Link from "next/link";
import { Input } from "@/components/ui/input";

async function fetchDiscuss() {
  const response: any = await fetch(
    "https://www.babypips.com/forexpedia/b.json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await response.json();
  return data;
}

export default async function Test() {
  const data = await fetchDiscuss();
  console.log(data);
  // const [alpha, setAlpha] = useState<string>("a");
  // const [all, setAll] = useState([]);

  // const getMeaning = async () => {
  //   const res = await GetGlossary(alpha);

  //   console.log(res);
  //   setAll(res.terms);
  // };

  // useEffect(() => {
  //   getMeaning();
  // }, [alpha]);

  // useEffect(() => {
  //   // Define an asynchronous function to fetch data from the API route
  //   const fetchData = async () => {
  //     try {
  //       // Make a request to the API route
  //       const response = await fetch("/api/fetch");
  //       console.log("response", response);

  //       // Check if the response is not successful
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       // Parse the JSON data
  //       const data = await response.json();
  //       console.log("data", data);

  //       // Set the data to state
  //       // setData(data);
  //     } catch (err) {
  //       // Set the error message to state
  //       // setError(`Failed to fetch data: ${err.message}`);
  //       console.log(err);
  //     }
  //   };

  //   // Call the asynchronous fetchData function
  //   fetchData();
  // }, []);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setAlpha(e.target.value);
  // };
  return (
    <div>
      {/* <Input onChange={handleChange} /> */}

      <div>
        {/* {all?.map(({ title, slug, path }) => (
          <Link key={path} href={""}>
            {title}
          </Link>
        ))} */}
      </div>
    </div>
  );
}
