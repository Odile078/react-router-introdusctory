import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { loginUser } from "../api";
export const loader = ({ request }) => {
  return new URL(request.url).searchParams.get("message");
};
const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState({});
  const message = useLoaderData();

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  console.log(status);
  console.log(error);
  const handleFormSubmit = (event) => {
    setStatus("submitting");
    event.preventDefault();
    console.log("-----------------------");
    console.log(loginFormData);
    loginUser(loginFormData)
      .then((data) => {
        setError({});
        console.log(data);
      })
      .catch((err) => {
        console.log("err", err, err.message);
        setError({ message: err.message });
      })
      .finally(() => {
        setStatus("idle");
      });
  };
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-10">
      <h1 className="text-3xl font-bold">Sign in to your account</h1>
      {message && (
        <h2 className="my-2 text-xl font-bold text-red-500">{message}</h2>
      )}
      {error?.message && (
        <h2 className="my-2 text-xl font-bold text-red-500">
          {error?.message}
        </h2>
      )}
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={handleChange}
          value={loginFormData.email}
          className="w-full p-5 text-gray-600 bg-white border border-gray-100 rounded-md focus:outline-none focus:border-gray-200 placeholder:text-gray-600"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={loginFormData.password}
          className="w-full p-5 text-gray-600 bg-white border border-gray-100 rounded-md focus:outline-none focus:border-gray-200 placeholder:text-gray-600"
        />
        <button
          disabled={status === "submitting" ? true : false}
          className="w-full p-3 my-4 text-white bg-orange-400 rounded-md disabled:bg-orange-300"
        >
          {status === "submitting" ? "Signing in" : "Sign in"}
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
