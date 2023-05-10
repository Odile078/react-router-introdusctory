import { useState } from "react";
import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { loginUser } from "../api";
export const loader = ({ request }) => {
  return new URL(request.url).searchParams.get("message");
};
export const action = async ({ request }) => {
  console.log("I'm the login function", request);
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    return redirect("/host");
  } catch (err) {
    console.log(err);
  }

  return null;
};
const Login = () => {
  const message = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-10">
      <h1 className="text-3xl font-bold">Sign in to your account</h1>
      {message && (
        <h2 className="my-2 text-xl font-bold text-red-500">{message}</h2>
      )}
      {/* {error?.message && (
        <h2 className="my-2 text-xl font-bold text-red-500">
          {error?.message}
        </h2>
      )} */}
      <Form method="post" replace>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="w-full p-5 text-gray-600 bg-white border border-gray-100 rounded-md focus:outline-none focus:border-gray-200 placeholder:text-gray-600"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-5 text-gray-600 bg-white border border-gray-100 rounded-md focus:outline-none focus:border-gray-200 placeholder:text-gray-600"
        />
        <button
          // disabled={status === "submitting" ? true : false}
          className="w-full p-3 my-4 text-white bg-orange-400 rounded-md disabled:bg-orange-300"
        >
          {/* {status === "submitting" ? "Signing in" : "Sign in"} */}Sign in
        </button>
      </Form>
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
