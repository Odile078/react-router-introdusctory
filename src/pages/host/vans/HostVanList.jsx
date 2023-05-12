import HostVan from "../../../components/cards/HostVan";
import { fetchHostVans } from "../../../api";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
export const loader = async () => {
  return defer({ hostVansPromise: fetchHostVans() });
};
const HostVanList = () => {
  const vansPromise = useLoaderData();

  return (
    <Suspense fallback={<h1 className="text-gray-600 text-lg">Loading...</h1>}>
      <Await resolve={vansPromise.hostVansPromise}>
        {(vans) => (
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
        )}
      </Await>
    </Suspense>
  );
};

export default HostVanList;
