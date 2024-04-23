import { Navbar } from "@/components";
import { AnalysisHero } from "../analysis/_components/AnalysisHero";
import GlossaryTabs from "./_components/GlossaryTabs";
import TopicSection from "./_components/TopicSection";
import Footer from "@/components/NewFooter";

async function fetchDiscuss(id: any = "a") {
  const response: any = await fetch(
    `https://www.babypips.com/forexpedia/${id}.json`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await response.json();
  return data;
}

export default async function Test() {
  const data = await fetchDiscuss("a");
  //   console.log(data);
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
        <TopicSection topic={data} param="a" />
      </div>
      <Footer />
    </div>
  );
}
