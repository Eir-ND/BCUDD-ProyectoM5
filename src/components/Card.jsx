/* eslint-disable react/prop-types */
// import Loading from "./Loading";

import Loading from "./Loading";

const Card = ({ details }) => {
  const { name, types, sprites, stats, abilities } = details;
  return (
    <>
      {details ? (
        <>
          <div className="flex flex-col border border-gray-600 rounded-2xl w-[800px] m-auto p-4 bg-gray-100 bg-opacity-90">
            <div className="flex items-center mb-4 justify-around">
              <div className="">
                <img
                  src={sprites.other.dream_world.front_default}
                  alt={`${name} sprite`}
                  className="w-48 h-48 object-contain"
                />
              </div>
              {/* name, types, stats */}
              <div className="ml-4 w-3/5">
                <h2 className="text-2xl font-bold capitalize">{name}</h2>
                <div className="flex justify-between">
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
                  <div className="mt-2 text-right">
                    <h3 className="text-lg font-semibold">Ability:</h3>
                    <div className="capitalize mt-1 py-1">
                      {abilities[0].ability.name}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Stats:</h3>
                  <div className="mt-1">
                    {stats.map((stat, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="capitalize">{stat.stat.name}:</span>
                        <span>
                          {stat.base_stat}
                          <div className="h-1 w-[250px] bg-gray-500">
                            <div
                              className="h-1 bg-cyan-600"
                              style={{ width: `${stat.base_stat / 3}%` }}
                            ></div>
                          </div>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-gray-600 rounded-2xl w-[800px] m-auto p-4 bg-gray-100 bg-opacity-90">
            <h1>
              <span>Sprites</span>
            </h1>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Card;
