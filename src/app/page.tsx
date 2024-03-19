import {
  Navbar,
  Hero,
  AdminBlogs,
  NewsBlogsBox,
  ForumOverView,
  Calendar,
} from "../components";

export default function Home() {
  return (
    <div className="min-w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="flex w-full mt-10 gap-4 pl-3 pr-6">
        <div className="w-full md:w-9/12">
          <AdminBlogs />
          <NewsBlogsBox />
        </div>
        <div className="hidden md:flex md:font-bold md: text-black text-wrap w-3/12 overflow-hidden"></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <ForumOverView />
        <Calendar />
      </div>
    </div>
  );
}
