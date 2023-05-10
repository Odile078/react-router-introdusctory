import { requireAuth } from "./RequireAuth";

const AuthRequiredLoader = async ({ request }) => await requireAuth(request);

export default AuthRequiredLoader;
