import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { vanDetails } = useOutletContext();
  return <div>Host Info</div>;
};

export default HostVanInfo;
