import { Suspense, useEffect, useState } from "react";
import Van from "../../components/cards/Van";
import {
  Await,
  Link,
  defer,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import { fetchVans } from "../../api";
export const loader = () => {
  return defer({ vansPromise: fetchVans() });
};

export const VansList = ({ vans }) => {
  const [filteredVans, setFilteredVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const filters = ["simple", "luxury", "rugged"];
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
    filterVans();
  }, [searchParams.get("type")]);
  return (
    <>
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 ">
        {filteredVans?.map((van) => (
          <Van key={van.id} {...van} />
        ))}
      </div>
    </>
  );
};

const Vans = () => {
  const vansPromise = useLoaderData();

  return (
    <div className="flex-1 p-4 my-6 space-y-10 text-4xl font-bold text-gray-900">
      <h1 className="text-3xl font-bold">Explore our van options</h1>
      <Suspense
        fallback={<h1 className="text-gray-600 text-lg">Loading...</h1>}
      >
        <Await resolve={vansPromise.vansPromise}>
          {(vansPromise) => <VansList vans={vansPromise} />}
        </Await>
      </Suspense>
    </div>
  );
};

export default Vans;
