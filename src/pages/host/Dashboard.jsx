import HostVanList from "./vans/HostVanList";

const Dashboard = () => {
  return (
    <>
      <div className="px-4 py-10 -mx-4 space-y-6 bg-orange-200">
        <h2 className="text-2xl font-bold">welcome!</h2>
        <div className="flex flex-wrap justify-between gap-4">
          <p className="text-base text-gray-600">
            income last <span className="font-bold underline">30 days</span>
          </p>
          <p className="text-base text-gray-600">Details</p>
        </div>
        <h2 className="text-2xl font-bold">$2,260</h2>
      </div>
      <div className="px-4 py-10 -mx-4 space-y-6 bg-orange-300">
        <div className="flex flex-wrap justify-between gap-4">
          <p className="text-base text-gray-600">
            Review score
            <span className="px-4 font-bold underline">4.5/5</span>
          </p>
          <p className="text-base text-gray-600">Details</p>
        </div>
      </div>

      <div className="py-10">
        <HostVanList />
      </div>
    </>
  );
};

export default Dashboard;
