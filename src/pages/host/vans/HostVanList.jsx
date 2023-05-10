import HostVan from "../../../components/cards/HostVan";
import { fetchHostVans } from "../../../api";
import { useLoaderData } from "react-router-dom";
export const loader = async () => {
  const list = await fetchHostVans();
  return list;
};
const HostVanList = () => {
  const vans = useLoaderData();

  return (
    <div className="flex-1 mb-6 space-y-10 text-4xl font-bold text-gray-900">
      <div className="space-y-6">
        <h1 className="text-xl font-bold">Your listed vans</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 ">
        {vans?.map((van) => (
          <HostVan key={van.id} {...van} />
        ))}
      </div>
    </div>
  );
};

export default HostVanList;
