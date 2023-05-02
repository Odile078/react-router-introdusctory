import { useOutletContext } from "react-router-dom";

const HostVanPrice = () => {
  const { vanDetails } = useOutletContext();
  return (
    <div>
      <p className="text-base font-bold ">
        $ {vanDetails?.price ?? ""}/<span className="font-normal">day</span>
      </p>
    </div>
  );
};

export default HostVanPrice;
