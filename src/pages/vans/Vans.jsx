import { useEffect, useState } from "react";
import Van from "../../components/cards/Van";
import { useSearchParams } from "react-router-dom";
const Vans = () => {
  const [vans, setVans] = useState([]);
  const [filteredVans, setFilteredVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log("type filter:", typeFilter);
  const filters = ["simple", "luxury", "rugged"];
  const getVans = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/vans");
      const vansList = await response.json();
      setLoading(false);
      setVans(vansList?.vans);
      filterVans(vansList?.vans);
    } catch (err) {
      setLoading(false);
      return;
    }
  };

  const filterVans = (vansList) => {
    const filteredList =
      vansList ||
      (vans &&
        (typeFilter
          ? vansList || vans.filter((van) => van?.type === typeFilter)
          : vans));
    console.log("filteredList:", filteredList, vans, typeFilter);
    setFilteredVans(filteredList);
  };
  const clearVanFilter = () => setSearchParams({});
  useEffect(() => {
    getVans();
  }, []);
  useEffect(() => {
    filterVans();
  }, [searchParams.get("type")]);
  return (
    <div className="flex-1 p-4 my-6 space-y-10 text-4xl font-bold text-gray-900">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Explore our van options</h1>
        <div className="flex flex-wrap justify-between gap-4 md:items-center">
          <div className="flex flex-wrap gap-4 ">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setSearchParams({ type: filter })}
                className="px-5 py-1 text-sm bg-orange-100 rounded"
              >
                {filter}
              </button>
            ))}
          </div>
          <button onClick={clearVanFilter} className="text-sm underline">
            Clear filters
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 ">
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredVans.map((van) => <Van key={van.id} {...van} />)
        )}
      </div>
    </div>
  );
};

export default Vans;
