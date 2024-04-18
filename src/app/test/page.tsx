'use client'
import React, { ChangeEvent, useEffect, useState } from "react";
import { GetGlossary } from "../../../utils/fetches/api.fetch";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const Learn = () => {
  const [alpha, setAlpha] = useState<string>("");
  const [all, setAll] = useState([]);

  const getMeaning = async () => {
    const res = await GetGlossary(alpha);

    console.log(res);
    setAll(res.terms);
  };

  useEffect(() => {
    getMeaning();
  }, [alpha]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAlpha(e.target.value);
  };
  return (
    <div>
      <Input onChange={handleChange} />

      <div>
        {all?.map(({ title, slug, path }) => (
          <Link key={path} href={""}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Learn;
