import { useOutletContext } from "react-router-dom";

const HostVanPrice = () => {
  const { vanDetails } = useOutletContext();
  return <div>Host price</div>;
};

export default HostVanPrice;
