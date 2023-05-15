import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="m-auto ">
      <h1 className="text-3xl font-bold text-center">
        Sorry the Page you were looking for was not found.
      </h1>
      <p className="mt-2 text-center text-gray-600">
        return <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
