/* eslint-disable react/prop-types */
// import Loading from "./Loading";

const Card = ({ details }) => {
  const { name, types, sprites, stats } = details;
  return (
    <>
      <div className="flex flex-col border border-gray-600 rounded-2xl w-[800px] m-auto p-4 bg-gray-100 bg-opacity-90">
        <div className="flex items-center mb-4">
          <img
            src={sprites.other.dream_world.front_default}
            alt={`${name} sprite`}
            className="w-48 h-48 object-contain"
          />
          <div className="ml-4">
            <h2 className="text-2xl font-bold capitalize">{name}</h2>
            <div className="mt-2">
              <h3 className="text-lg font-semibold">Types:</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {types.map((type, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full capitalize"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Stats:</h3>
              <div className="mt-1">
                {stats.map((stat, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="capitalize">{stat.stat.name}:</span>
                    <span>{stat.base_stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3> asdasd</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
