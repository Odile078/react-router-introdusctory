import { requireAuth } from "./RequireAuth";

const AuthRequiredLoader = async () => await requireAuth();

export default AuthRequiredLoader;
