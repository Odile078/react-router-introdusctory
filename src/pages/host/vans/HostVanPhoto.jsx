import { useOutletContext } from "react-router-dom";

const HostVanPhoto = () => {
  const { vanDetails } = useOutletContext();
  return (
    <div>
      <img
        src={vanDetails?.imageUrl}
        className="object-cover object-center w-20 h-20 rounded-md"
      />
    </div>
  );
};

export default HostVanPhoto;
