import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VanDetails, {
  loader as vanDetailsLoader,
} from "./pages/vans/VanDetails";
import BlankLayout from "./components/layout/BlankLayout";
import HostLayout from "./components/layout/HostLayout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import "./server";
import HostVanList, {
  loader as hostVansLoader,
} from "./pages/host/vans/HostVanList";
import HostVanDetails, {
  loader as HostVanDetailsLoader,
} from "./pages/host/vans/HostVanDetails";
import HostVanInfo from "./pages/host/vans/HostVanInfo";
import HostVanPrice from "./pages/host/vans/HostVanPrice";
import HostVanPhoto from "./pages/host/vans/HostVanPhoto";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login, { loader as loginLoader } from "./pages/Login";
import Register from "./pages/Register";
import AuthRequiredLoader from "./utils/AuthRequiredLoader";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BlankLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="vans"
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<VanDetails />}
          errorElement={<Error />}
          loader={vanDetailsLoader}
        />
        <Route path="host" element={<HostLayout />} loader={AuthRequiredLoader}>
          <Route
            index
            element={<Dashboard />}
            loader={hostVansLoader}
            // errorElement={<Error />}
          />
          <Route path="income" element={<Income />} />
          <Route
            path="vans"
            element={<HostVanList />}
            loader={hostVansLoader}
            errorElement={<Error />}
          />
          <Route
            path="vans/:id"
            element={<HostVanDetails />}
            loader={HostVanDetailsLoader}
          >
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPrice />} />
            <Route path="photos" element={<HostVanPhoto />} />
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="login" element={<Login />} loader={loginLoader} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
