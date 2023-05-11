import { redirect } from "react-router-dom";

export async function requireUserAuth(request) {
  const isLoggedIn = localStorage.getItem("loggedin");
  const pathname = new URL(request.url).pathname;

  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must log in first.&redirectTo=${pathname}`
    );
  }
}
