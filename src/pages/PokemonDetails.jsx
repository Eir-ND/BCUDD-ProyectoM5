import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import Card from "../components/Card";

const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [pokemonName]);
  console.log(details);

  return (
    <div>
      <h1>Pokemon Details</h1>
      <Link to="/">Back</Link>

      {!details.name ? <Loading /> : <Card details={details} />}
    </div>
  );
};

export default PokemonDetails;
