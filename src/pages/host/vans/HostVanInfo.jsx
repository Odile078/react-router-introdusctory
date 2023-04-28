import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { vanDetails } = useOutletContext();
  console.log(("van:", vanDetails));
  return (
    <div className="space-y-2">
      <p className="text-base font-bold">
        Name:
        <span className="px-1 text-base font-normal text-gray-600">
          {vanDetails.name ?? ""}
        </span>
      </p>
      <p className="text-base font-bold">
        Category:
        <span className="px-1 text-base font-normal text-gray-600">
          {vanDetails.type ?? ""}
        </span>
      </p>{" "}
      <p className="text-base font-bold">
        Description:
        <span className="px-1 text-base font-normal text-gray-600">
          {vanDetails.description ?? ""}
        </span>
      </p>{" "}
      <p className="text-base font-bold">
        visibility:
        <span className="px-1 text-base font-normal text-gray-600">Public</span>
      </p>
    </div>
  );
};

export default HostVanInfo;
