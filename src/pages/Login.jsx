import { Link } from "react-router-dom";

const Login = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-10">
      <h1 className="text-3xl font-bold">Sign in to your account</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-5 text-gray-600 bg-white border border-gray-100 rounded-md focus:outline-none focus:border-gray-200 placeholder:text-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-5 text-gray-600 bg-white border border-gray-100 rounded-md focus:outline-none focus:border-gray-200 placeholder:text-gray-600"
        />
        <button className="w-full p-5 my-4 text-white bg-orange-400 rounded-md">
          Sign in
        </button>
      </form>
      <p className="text-base">
        Don't have an account?{" "}
        <Link to="/register" className="text-orange-200">
          Create one now
        </Link>
      </p>
    </div>
  );
};

export default Login;