import { CoursesBox } from "./CoursesBox";

export const CoursesOverview = () => {
  const forexCourses = [
    {
      name: "Forex Fundamentals",
      students: 100,
      duration: "4 weeks",
      description:
        "Learn the basic principles and concepts of Forex trading, including currency pairs, market analysis, and risk management.",
      price: 199.99,
    },
    {
      name: "Technical Analysis for Forex Trading",
      students: 80,
      duration: "6 weeks",
      description:
        "Master the art of technical analysis in Forex trading, covering various indicators, chart patterns, and strategies.",
      price: 249.99,
    },
    {
      name: "Forex Risk Management Strategies",
      students: 50,
      duration: "3 weeks",
      description:
        "Explore effective risk management techniques tailored specifically for Forex traders to protect capital and maximize profits.",
      price: 149.99,
    },
    {
      name: "Advanced Forex Trading Strategies",
      students: 30,
      duration: "8 weeks",
      description:
        "Delve into advanced trading strategies such as scalping, swing trading, and position trading to enhance your Forex trading skills.",
      price: 299.99,
    },
  ];

  return (
    <div className="w-full py-10 px-4 md:px-0">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-6">
        {/*Header Section*/}
        <div className="w-full flex flex-col lg:flex-row md:items-center justify-between gap-4">
          <div className="">
            <h2 className="text-4xl font-bold font-secularOne text-primary">
              Popular and trending courses
            </h2>
            <p className="text-lg text-gray-500">
              Learn from the best in the industry
            </p>
          </div>

          <button
            className="bg-primary text-white rounded-[30px] py-3 px-4"
            type="button"
          >
            All Courses
          </button>
        </div>

        {/*Courses Section*/}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {forexCourses.map((course, index) => (
            <div key={index}>
              <CoursesBox
                name={course.name}
                description={course.description}
                price={course.price}
                duration={course.duration}
                students={course.students}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
