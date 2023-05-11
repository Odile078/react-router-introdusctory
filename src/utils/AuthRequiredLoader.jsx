import { requireUserAuth } from "./requireUserAuth";

const AuthRequiredLoader = async ({ request }) =>
  await requireUserAuth(request);

export default AuthRequiredLoader;
