import aboutImg from "../assets/images/aboutImg.png";
const About = () => {
  return (
    <div className="pb-10 space-y-10">
      <img
        className="object-cover object-center w-full max-h-96"
        src={aboutImg}
      />
      <div className="max-w-5xl mx-6 space-y-6 font-bold">
        <h1 className="text-3xl font-bold text-gray-900">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="text-sm text-gray-900">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="text-sm text-gray-800">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="p-6 mx-6 space-y-6 bg-orange-200">
        <h1 className="text-3xl font-bold text-gray-800">
          Your destination is waiting. Your van is ready.
        </h1>
        <button className="px-5 py-2 text-base text-white bg-gray-900 rounded-md ">
          Explore our vans
        </button>
      </div>
    </div>
  );
};

export default About;
