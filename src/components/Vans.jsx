const Vans = () => {
  const filters = ["simple", "luxury", "rugged"];
  return (
    <div className="flex-1 p-4 my-6 space-y-10 text-4xl font-bold ">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Explore our van options</h1>
        <div className="flex flex-wrap justify-between gap-4 md:items-center">
          <div className="flex flex-wrap gap-4 ">
            {filters.map((filter, index) => (
              <button
                key={index}
                className="px-5 py-1 text-sm bg-orange-100 rounded"
              >
                {filter}
              </button>
            ))}
          </div>
          <button className="text-sm underline">Clear filters</button>
        </div>
      </div>
    </div>
  );
};

export default Vans;
