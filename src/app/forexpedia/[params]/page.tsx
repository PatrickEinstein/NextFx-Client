import { AnalysisHero } from "@/app/analysis/_components/AnalysisHero";
import { Navbar } from "@/components";
import React, { ChangeEvent, useEffect, useState } from "react";
import GlossaryTabs from "../_components/GlossaryTabs";
import TopicSection from "../_components/TopicSection";
import Footer from "@/components/NewFooter";
import ForexpediaCategories from "../_components/ForexpediaCategories";

async function fetchDiscuss(id: any) {
  const response: any = await fetch(
    `https://www.babypips.com/forexpedia/${id}.json`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await response.json();
  return data;
}

export default async function Test({ params }: { params: any }) {
  const data = await fetchDiscuss(params.params);
  console.log(data.topics);
  //   console.log(params.params);

  return (
    <div className="w-full">
      <Navbar />
      <AnalysisHero
        headerText="Forex Glossary"
        subText="Forexpedia is the original online forex glossary made specifically for forex traders"
      />
      <div className="w-full px-5 lg:px-0 max-w-5xl mx-auto py-6">
        <GlossaryTabs />
        {params.params.length === 1 ? (
          <TopicSection topic={data} param={params.params} />
        ) : (
          <ForexpediaCategories categories={data} />
        )}
      </div>
      <Footer />
    </div>
  );
}
