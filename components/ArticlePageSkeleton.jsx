import Header from "./Header";

export default function ArticlePageSkeleton() {
  return (
    <div className="loading">
      <Header />

      {/* img */}
      <div className="w-full h-[60vh] bg-gray-700"></div>

      {/* content */}
      <div className="px-[80px]">
        <div className="bg-gray-700 w-[70%] h-16 mt-12"></div>
        <div className="h-8 bg-gray-700 w-full mt-6"></div>
        <div className="h-8 bg-gray-700 w-[30%] mt-3"></div>
        <div className="flex justify-between my-12 items-center">
          <div className="flex">
            <div className="h-12 w-12 rounded-full bg-gray-700"></div>
            <div className="ml-8">
              <div className="bg-gray-700 w-80 h-5 mb-2"></div>
              <div className="bg-gray-700 w-80 h-5"></div>
            </div>
          </div>
          <div className="h-10 bg-gray-700 w-72"></div>
        </div>
        <div className="mb-12">
          <div className="h-5 w-full bg-gray-700 mb-2"></div>
          <div className="h-5 w-[30%] bg-gray-700 mb-2"></div>
          <div className="h-5 w-[60%] bg-gray-700"></div>
        </div>
        <div className="mb-12">
          <div className="h-5 w-full bg-gray-700 mb-2"></div>
          <div className="h-5 w-[30%] bg-gray-700 mb-2"></div>
          <div className="h-5 w-full bg-gray-700 mb-2"></div>
          <div className="h-5 w-[60%] bg-gray-700 mb-2"></div>
          <div className="h-5 w-[30%] bg-gray-700 mb-2"></div>
        </div>
        <div>
          <div className="h-5 w-full bg-gray-700 mb-2"></div>
          <div className="h-5 w-[30%] bg-gray-700 mb-2"></div>
          <div className="h-5 w-[60%] bg-gray-700 mb-2"></div>
          <div className="h-5 w-full bg-gray-700 mb-2"></div>
        </div>
      </div>

      <style jsx>{`
        .loading {
          padding: 150px calc(20% + 50px) 50px;
        }
      `}</style>
    </div>
  );
}
