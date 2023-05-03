import { useEffect, useState } from "react";
import HostVan from "../../../components/cards/HostVan";
import { fetchHostVans } from "../../../api";
import { useLoaderData } from "react-router-dom";
export const loader = () => {
  const list = fetchHostVans();
  console.log(list);
  return list;
};
const HostVanList = () => {
  const vans = useLoaderData();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  // const getVans = async () => {
  //   try {
  //     setLoading(true);
  //     const vansList = await fetchHostVans();
  //     setLoading(false);
  //     setVans(vansList);
  //   } catch (err) {
  //     setError({ message: "Sorry, something went wrong, try again" });
  //     setLoading(false);
  //     return;
  //   }
  // };
  // useEffect(() => {
  //   getVans();
  // }, []);
  console.log(vans, useLoaderData(), "data------------:", vans);
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
