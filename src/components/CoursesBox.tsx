import Image from "next/image";
import Cart from "../../public/cart.svg";

type CourseBoxProps = {
  name?: string;
  description?: string;
  price?: number;
  duration?: string;
  students?: number;
  video?: string;
  script?: string;
  createdAt?: string;
  updatedAt?: string;
  courseTitle?: string;
};

export const CoursesBox = ({
  name,
  description,
  price,
  duration,
  students,
  video,
  script,
  createdAt,
  updatedAt,
  courseTitle,
}: CourseBoxProps) => {
  return (
    <div className="px-4 py-6 rounded-[20px] border border-[#142C44] bg-[#fff] md:h-80">
      <div className="w-full flex flex-col gap-5">
        <h3 className="text-2xl text-primary font-semibold font-secularOne  ">
          Course Title: {courseTitle}
        </h3>
        <h3 className="text-1xl text-primary font-semibold font-secularOne text-wrap md:h-20">
          Chapter : {name}
        </h3>

        <div className="flex flex-row items-center justify-between text-primary">
          <span className="text-base">{students} students</span>

          <span className="text-base">{duration}</span>
        </div>
        <span className="text-base md:h-15">
          {description && description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </span>
        <div className="w-full flex flex-row justify-between">
          {/* <Image src={Cart} alt="cart" /> */}
        </div>
      </div>
    </div>
  );
};
