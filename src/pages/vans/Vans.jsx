import { useEffect, useState } from "react";
import Van from "../../components/cards/Van";
const Vans = () => {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const filters = ["simple", "luxury", "rugged"];
  const getVans = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/vans");
      const vansList = await response.json();
      setLoading(false);
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
    <div className="flex-1 p-4 my-6 space-y-10 text-4xl font-bold text-gray-900">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Explore our van options</h1>
        <div className="flex flex-wrap justify-between gap-4 md:items-center">
          <div className="flex flex-wrap gap-4 ">
            {filters.map((filter, index) => (
              <button
                key={index}
                className="px-5 py-1 text-sm bg-orange-100 rounded"
              >
                {filter}
              </button>
            ))}
          </div>
          <button className="text-sm underline">Clear filters</button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 ">
        {loading ? (
          <p>Loading...</p>
        ) : (
          vans.map((van) => <Van key={van.id} {...van} />)
        )}
      </div>
    </div>
  );
};

export default Vans;
