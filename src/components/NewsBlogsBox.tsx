"use client";

type Props = {
  image?: string;
  article_url?: string;
  time?: string;
  subscription?: string;
  name?: string;
  description?: string;
  title?: string;
  post_time_utc?: string;
};

export const NewsBlogsBox = ({
  image,
  article_url,
  time,
  subscription,
  name,
  description,
  title,
  post_time_utc,
}: Props) => {
  var nowTime = new Date().toUTCString();
  var postTime = new Date(post_time_utc!);
  var time1: any = new Date(nowTime);
  var time2: any = new Date(postTime);

  var difference = Math.abs(time2 - time1);

  var hours = Math.floor(difference / (1000 * 60 * 60));
  var days = Math.floor(hours / 24);

  var timeDiff = hours > 24 ? days + "days ago" : hours + "hours ago";

  return (
    <div className="flex">
      <div
        className="h-30 md:h-30 w-6/12 rounded-t-xl relative group"
        style={{
          background: `url(${image})`,
          backgroundSize: "center",
        }}
      >
        <div className="overlay items-center justify-between absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 px-20 ">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => (window.location.href = `${article_url}`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="text-black rounded-b-xl mt-1 py-3 px-3 w-6/12">
        <h5
          className="text-xl font-semibold mb-2"
          onClick={() => (window.location.href = `${article_url}`)}
        >
          {title}
        </h5>
        <p
          className=""
          onClick={() => (window.location.href = `${article_url}`)}
        >
          {description}
        </p>
        <p>{timeDiff}</p>
      </div>
    </div>
  );
};
