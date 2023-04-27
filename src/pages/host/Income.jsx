import graph from "../../assets/images/income-graph.png";
const Income = () => {
  return (
    <>
      <div className="py-4 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-2xl font-bold">Income</p>
          <p className="font-normal text-gray-600">
            last<span className="px-1 font-bold underline">30 days</span>
          </p>
        </div>
        <p className="pb-4 text-2xl font-bold">$2,260</p>
        <img src={graph} className="object-cover object-center max-h-60 " />
      </div>
      <div className="py-4 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="text-2xl font-bold">Your transactions(3)</p>
          <p className="font-normal text-gray-600">
            last<span className="px-1 font-bold underline">30 days</span>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-wrap items-end justify-between gap-4 p-4 bg-white">
            <p className="text-2xl font-bold">$720</p>
            <p className="font-normal text-gray-600">1/12/22</p>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4 p-4 bg-white">
            <p className="text-2xl font-bold">$520</p>
            <p className="font-normal text-gray-600">10/11/22</p>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4 p-4 bg-white">
            <p className="text-2xl font-bold">$980</p>
            <p className="font-normal text-gray-600">23/11/22</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Income;
