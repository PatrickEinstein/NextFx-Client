"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GlossaryTabs() {
  const router = useRouter();
  const pathName = usePathname();
  //   console.log("pathName", pathName);

  const [reload, setReload] = useState(false);

  const uppercaseAlphabets = [];

  // ASCII values for uppercase letters 'A' to 'Z' are 65 to 90
  for (let i = 65; i <= 90; i++) {
    uppercaseAlphabets.push(String.fromCharCode(i));
  }

  const handleClick = (letter: string) => {
    router.push(`/forexpedia/${letter}`);

    setTimeout(() => {
      //   router.refresh();
      setReload((prev) => !prev);
    }, 1000);
  };

  //   reload the page when the path changes
  //   useEffect(() => {
  //     //   router.refresh();
  //   }, [pathName, reload]);

  return (
    <div>
      <Tabs
        defaultValue={pathName.includes("topics") ? "topic" : "term"}
        className="w-full"
      >
        <TabsList className="grid grid-cols-2 w-full max-w-[400px] mb-6 !bg-[#EAEAEA]">
          <TabsTrigger
            value="term"
            onClick={() => {
              router.push("/forexpedia");
            }}
          >
            Browse by Term
          </TabsTrigger>
          <TabsTrigger
            value="topic"
            onClick={() => {
              router.push(`/forexpedia/topics`);
            }}
          >
            Browse by Topic
          </TabsTrigger>
        </TabsList>
        <TabsContent value="term">
          <div className="flex flex-wrap gap-2">
            {uppercaseAlphabets.map((letter) => (
              <Link
                href={`/forexpedia/${letter.toLowerCase()}`}
                key={letter}
                className="hover:!text-white text-gray-800 font-semibold !bg-[#EAEAEA] hover:!bg-primary px-4 py-2 rounded-full"
                // onClick={() => {
                //   handleClick(letter.toLowerCase());
                // }}
                style={{
                  backgroundColor:
                    pathName === `/forexpedia/${letter.toLowerCase()}`
                      ? "#142C44 !important"
                      : pathName === "/forexpedia" && letter === "A"
                      ? "#142C44 !important"
                      : "#EAEAEA !important",
                  color:
                    pathName === `/forexpedia/${letter.toLowerCase()}`
                      ? "#FFFFFF !important"
                      : pathName === "/forexpedia" && letter === "A"
                      ? "#FFFFFF !important"
                      : "#142C44 !important",
                }}
              >
                {letter}
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="topic">
          <div className="flex flex-wrap gap-2">
            {uppercaseAlphabets.map((letter) => (
              <button
                key={letter}
                className="hover:!text-white text-gray-800 font-semibold !bg-[#EAEAEA] hover:!bg-primary px-4 py-2 rounded-full"
                onClick={() => {}}
              >
                {letter}
              </button>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
