import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="p-6 m-auto">
      <h1 className="text-lg text-gray-600">
        {error ? error?.message : "Something went wrong, try again!"}
      </h1>
    </div>
  );
};

export default Error;
