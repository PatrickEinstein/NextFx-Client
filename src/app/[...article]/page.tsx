"use client";

import { useCallback, useEffect, useState } from "react";
import { getAnArticle } from "../../../utils/fetches/api.fetch";
import { Navbar } from "@/components";
import Footer from "@/components/NewFooter";

const ViewArticle = ({
  params,
}: {
  children: React.ReactNode;
  params: { News: string; articleId: string };
}) => {
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
  });

  const {
    name,
    title,
    description,
    article_photo_url,
    post_time_utc,
    article_url,
    picture,
    _id,
  } = article;

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
        className="flex flex-col items-start justify-between"
      >
        <div className="relative w-[500]">
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
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              {/* <a href={post.href}> */}
              <a href={`${article}/${_id}`}>
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
      <Footer />
    </div>
  );
};

export default ViewArticle;
