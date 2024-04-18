import { Separator } from "@/components/ui/separator";

export function TableComponent({ categories }: any) {
  return (
    <div className="overflow-x-auto ">
      <div className="min-w-[800px]">
        {/*Header Section*/}
        <div className="w-full flex flex-col">
          <div className="grid grid-cols-4 gap-8 py-2">
            <h4 className="col-span-3 text-base font-bold text-gray-400">
              Topic
            </h4>
            <div className="col-span-1 grid grid-cols-3 gap-8">
              <span className="text-base font-bold text-gray-400">Replies</span>
              <span className="text-base font-bold text-gray-400">Views</span>
              <span className="text-base font-bold text-gray-400">
                Activity
              </span>
            </div>
          </div>
          <Separator
            orientation="horizontal"
            className="w-full h-[3px] bg-gray-300"
          />
        </div>
        {categories.map((category: any, index: number) => (
          <div key={index} className="grid grid-cols-4 gap-8 py-4">
            <div className="col-span-3 grid">
              <div className="flex flex-col">
                <h4 className="text-base font-medium text-primary">
                  {category.title}
                </h4>
                <div className="flex flex-row items-center gap-1">
                  <div className="h-2 w-2 bg-blue-400"></div>
                  <span className="text-[12px] text-gray-400">
                    {category.category}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-400">{category.description}</p>
            </div>
            <div className="col-span-1 grid grid-cols-3">
              <span className="text-base font-medium text-gray-400 text-center">
                {category.replies}
              </span>
              <span className="text-base font-medium text-primary text-center">
                {category.views}
              </span>
              <span className="text-base font-medium text-secondary text-center">
                {category.activity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
