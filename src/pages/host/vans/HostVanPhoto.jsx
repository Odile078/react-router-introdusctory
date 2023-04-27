import { useOutletContext } from "react-router-dom";

const HostVanPhoto = () => {
  const { vanDetails } = useOutletContext();
  return <div>Host Photo</div>;
};

export default HostVanPhoto;
