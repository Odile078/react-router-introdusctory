import { Link } from "react-router-dom";

const Van = ({ id, imageUrl, type, name, price }) => {
  return (
    <Link to={id} className="block">
      <img
        src={imageUrl}
        className="object-cover object-center w-full rounded-md h-60"
      />
      <div className="flex justify-between gap-4 p-4">
        <div className="space-y-2">
          <h5 className="text-3xl font-bold text-gray-900">{name}</h5>
          <p
            className={`px-5 py-1 text-sm text-orange-100 rounded w-fit ${
              type === "simple"
                ? "bg-orange-400"
                : type === "luxury"
                ? "bg-gray-900"
                : "bg-emerald-900"
            }`}
          >
            {type}
          </p>
        </div>
        <div>
          <p className="text-base font-bold ">
            {price}$/<span className="font-normal">day</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Van;
