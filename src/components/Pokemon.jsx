import { useState, useEffect } from "react";

const Pokemon = () => {
    const [list, setList] = useState([]);
    const [pkmn, setPkmn] = useState('');
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => setList(data.results)) // Accessing the 'results' array in the API response
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    }, []);
    
    const filteredPokemon = list.filter(pokemon => 
        pokemon.name.toLowerCase().includes(pkmn.toLowerCase())
    );

    return (
        <div>
            <div className="text-center p-4">
                <input 
                    type="text" 
                    value={pkmn}
                    onChange={(e) => setPkmn(e.target.value)}
                    placeholder="Search Pokémon" 
                    className="py-3 px-6 w-9/12 text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none shadow-md"
                />
                {pkmn ? (
                    <div className="mt-[20px] ">
                        {filteredPokemon.length > 0 ? (
                            filteredPokemon.map((pokemon, index) => (
                                <p key={index} className="capitalize">{pokemon.name}</p>
                            ))
                        ) : (
                            <p>No Pokémon found</p>
                        )}
                    </div>
                ) : (
                    <p className="mt-[20px]">Loading...</p>
                )}
            </div>
        </div>
    )
};

export default Pokemon;