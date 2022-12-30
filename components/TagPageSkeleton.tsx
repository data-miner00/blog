import Header from "./Header";

function TagPageSkeleton(): JSX.Element {
  return (
    <div className="pt-[150px] pb-[50px] max-w-[1192px] mx-auto">
      <Header />
      <div>
        <div className="h-10 w-3/5 bg-gray-500 mb-20"></div>
        <div className="w-[695px] flex justify-between mb-10">
          <div>
            <div className="h-6 mb-3 w-[270px] bg-gray-500"></div>
            <div className="h-6 mb-3 w-[200px] bg-gray-500"></div>
            <div className="h-6 mb-3 w-[360px] bg-gray-500"></div>
            <div className="h-6 mb-3 w-[290px] bg-gray-500"></div>
          </div>
          <div className="bg-gray-500 w-[220px]"></div>
        </div>
        <div className="w-[695px] flex justify-between mb-10">
          <div>
            <div className="h-6 mb-3 w-[270px] bg-gray-500"></div>
            <div className="h-6 mb-3 w-[200px] bg-gray-500"></div>
            <div className="h-6 mb-3 w-[360px] bg-gray-500"></div>
            <div className="h-6 mb-3 w-[290px] bg-gray-500"></div>
          </div>
          <div className="bg-gray-500 w-[220px]"></div>
        </div>
      </div>
    </div>
  );
}

export default TagPageSkeleton;
