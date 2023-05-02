import { useEffect, useState } from "react";
import Van from "../../components/cards/Van";
import { Link, useSearchParams } from "react-router-dom";
const Vans = () => {
  const [vans, setVans] = useState([]);
  const [filteredVans, setFilteredVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
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
    const vansToFilter = vansList || vans;
    const filteredList =
      vansToFilter &&
      (typeFilter
        ? vansToFilter.filter((van) => van?.type === typeFilter)
        : vansToFilter);
    setFilteredVans(filteredList);
  };

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
              <Link
                key={index}
                to={`?type=${filter}`}
                className={`px-5 py-1 text-sm rounded ${
                  typeFilter && typeFilter === filter
                    ? typeFilter === "simple"
                      ? "bg-orange-400 text-orange-100"
                      : typeFilter === "luxury"
                      ? "bg-gray-900 text-orange-100"
                      : "bg-emerald-900 text-orange-100"
                    : "bg-orange-100"
                }`}
              >
                {filter}
              </Link>
            ))}
          </div>
          {typeFilter && (
            <Link to="." className="text-sm underline">
              Clear filters
            </Link>
          )}
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
