export function TableComponent({ categories }: any) {
  return (
    <div className="">
      {categories.map((category: any, index: number) => (
        <div key={index} className="grid grid-cols-4 gap-8 py-4">
          <div className="col-span-3 grid">
            <h4 className="text-base font-bold text-gray-400">
              {category.title}
            </h4>
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
  );
}
