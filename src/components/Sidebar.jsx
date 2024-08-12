import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Sidebar() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="w-[250px] h-full py-20 px-2 bg-[#f8f8f8] shadow-[2px_0_5px_rgba(0, 0, 0, 0.1)] fixed overflow-y-auto">
        {!pokemons.length ? (
          <div className="text-[18px] text-[#888] text-center mt-[50vh]">
            Loading...
          </div>
        ) : (
          <ul className="list-none p-0 m-0">
            {pokemons.map((pkmn, index) => (
              <li
                key={index}
                className="w-full p-[10px] text-[16px] border-b border-gray-300 cursor-pointer transition duration-300 hover:bg-custom-gray text-justify active:bg-neutral-600 focus:bg-neutral-500"
              >
                <Link to={`/pokemon/${pkmn.name}`}>
                  No.{index + 1}{" "}
                  {pkmn.name.charAt(0).toUpperCase() + pkmn.name.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Sidebar;
