import { Link } from "react-router-dom";

const HostVan = (Van = ({ id, imageUrl, name, price }) => {
  return (
    <Link to={`/host/vans/${id}`} className="flex flex-wrap gap-6">
      <img
        src={imageUrl}
        className="object-cover object-center w-full h-20 rounded-md"
      />

      <div className="space-y-2">
        <h5 className="text-3xl font-bold text-gray-900">{name}</h5>
        <p className="text-base font-bold ">
          {price}$/<span className="font-normal">day</span>
        </p>
      </div>
    </Link>
  );
});

export default HostVan;
