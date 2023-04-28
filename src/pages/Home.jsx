import { Link } from "react-router-dom";
import hero from "../assets/images/homeImg.png";
const Home = () => {
  return (
    <main className="relative flex items-center justify-center flex-1 p-4 text-4xl font-bold">
      <img
        className="absolute inset-0 object-cover object-center w-full h-full "
        src={hero}
      />
      <div className="relative space-y-10">
        <h1 className="text-3xl font-bold text-white">
          You got the travel plans, we got the travel vans.
        </h1>
        <h3 className="text-base text-white">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </h3>
        <Link
          to="/vans"
          className="block w-full p-3 text-base text-center text-white bg-orange-400 rounded-md"
        >
          Find your van
        </Link>
      </div>
    </main>
  );
};

export default Home;
