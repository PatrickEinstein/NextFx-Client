"use client";

import { useCallback, useEffect, useState } from "react";
import { getAnArticle } from "../../../utils/fetches/api.fetch";
import { Navbar } from "@/components";
import Footer from "@/components/NewFooter";

// type ViewArticleProps = {
//   children: React.ReactNode;
//   params: { article: [articleId: string, News: string] };
// };
interface ViewArticleProps {
  params: { article: [string, string] };
}

const ViewArticlePage: React.FC<ViewArticleProps> = ({ params }) => {
  const News = params.article[0];
  const articleId = params.article[1];

  const load = {
    id: articleId,
    article: News,
  };
  const [article, setArticle] = useState({
    name: "",
    title: "",
    description: "",
    article_photo_url: "",
    post_time_utc: "",
    article_url: "",
    picture: "",
    _id: "",
    createdAt: "",
  });

  const {
    name,
    title,
    description,
    article_photo_url,
    post_time_utc,
    article_url,
    picture,
    createdAt,
    _id,
  } = article;
  // console.log(article);

  const getArticle = useCallback(async () => {
    const res = await getAnArticle(load);
    setArticle(res.message);
  }, [articleId]);

  useEffect(() => {
    getArticle();
  }, [articleId]);

  return (
    <div>
      <Navbar />
      <article
        // key={post.id}
        key={_id}
        className="flex flex-col items-start justify-between max-w-5xl mx-auto py-7"
      >
        <div className="flex w-full flex-col gap-6 items-start">
          <h1 className="text-4xl font-bold font-monoSans">{title}</h1>
          <div className="relative flex items-center gap-x-4">
            <img
              src={article_photo_url}
              // src={post.author.imageUrl}
              alt=""
              className="h-10 w-10 rounded-full bg-gray-100"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                By{" "}
                <a>
                  <span className="absolute inset-0" />
                  PATRICK
                </a>
              </p>
              <div className="max-w-xl">
                <div className="flex items-center gap-x-4 text-xs">
                  {/* <time dateTime={post.datetime} className="text-gray-500"> */}
                  <time dateTime={createdAt} className="text-gray-500">
                    {createdAt?.split("T")?.join(" ")?.split(".")[0]}

                    {/* {post.date} */}
                  </time>
                </div>
              </div>
              {/* <p className="text-gray-600">{post.author.role}</p> */}
              <p className="text-gray-600">Beginner</p>
            </div>
          </div>
          <img
            // src={post.imageUrl}
            src={picture}
            alt=""
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
        </div>

        <div className="group relative">
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {/* {post.description} */}
            {description}
          </p>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default ViewArticlePage;
