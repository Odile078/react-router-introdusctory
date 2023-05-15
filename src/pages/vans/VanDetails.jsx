import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchVanDetails } from "../../api";
const VanDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vanDetails, setVanDetails] = useState({});
  const { imageUrl, type, name, price, description } = vanDetails;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const getVanDetails = async () => {
    try {
      setLoading(true);
      const vanData = await fetchVanDetails(id);
      setVanDetails(vanData[0]);
    } catch (err) {
      setError({ message: "Sorry, something went wrong, try again" });
      return;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getVanDetails();
  }, [id]);
  return (
    <div className="flex-1 p-4">
      {loading ? (
        <p>loading...</p>
      ) : error?.message ? (
        <p className="text-lg text-gray-600">{error?.message}</p>
      ) : (
        <div className="space-y-10">
          <Link
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm underline"
          >
            <svg
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0223 6.28131C13.4036 6.28131 13.7128 5.97217 13.7128 5.59082C13.7128 5.20947 13.4036 4.90033 13.0223 4.90033V6.28131ZM0.574363 5.10257C0.304709 5.37222 0.304709 5.80942 0.574363 6.07907L4.96862 10.4733C5.23828 10.743 5.67547 10.743 5.94513 10.4733C6.21478 10.2037 6.21478 9.76648 5.94513 9.49683L2.03912 5.59082L5.94513 1.68481C6.21478 1.41516 6.21478 0.977962 5.94513 0.708308C5.67547 0.438654 5.23828 0.438654 4.96862 0.708308L0.574363 5.10257ZM13.0223 4.90033L1.06261 4.90033V6.28131L13.0223 6.28131V4.90033Z"
                fill="#858585"
              />
            </svg>
            <p>back</p>
          </Link>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <img
              src={imageUrl}
              className="object-cover object-center w-full rounded-md max-w-fit md:max-w-full max-h-96"
            />
            <div className="space-y-6">
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
              <h5 className="text-3xl font-bold text-gray-900">{name}</h5>
              <p className="text-base font-bold ">
                {price}$/<span className="font-normal">day</span>
              </p>
              <h5 className="text-base text-gray-900">{description}</h5>
              <button className="w-full p-3 text-base text-white bg-orange-400 rounded-md">
                Rent this car
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VanDetails;
