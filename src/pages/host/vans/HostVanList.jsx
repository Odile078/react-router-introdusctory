import { useEffect, useState } from "react";
import HostVan from "../../../components/cards/HostVan";

const HostVanList = () => {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const getVans = async () => {
    try {
      console.log("fetch");
      setLoading(true);
      const response = await fetch("/api/host/vans");
      const vansList = await response.json();
      setLoading(false);
      console.log("fetch", vansList);
      setVans(vansList?.vans);
    } catch (err) {
      setLoading(false);
      return;
    }
  };
  useEffect(() => {
    getVans();
  }, []);
  return (
    <div className="flex-1 mb-6 space-y-10 text-4xl font-bold text-gray-900">
      <div className="space-y-6">
        <h1 className="text-xl font-bold">Your listed vans</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 ">
        {loading ? (
          <p className="text-base text-gray-600">Loading...</p>
        ) : (
          vans.map((van) => <HostVan key={van.id} {...van} />)
        )}
      </div>
    </div>
  );
};

export default HostVanList;
