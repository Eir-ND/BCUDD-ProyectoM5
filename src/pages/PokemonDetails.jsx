import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { ErrorBoundary } from "react-error-boundary";

const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [pokemonName]);

  return (
    <div className="ml-[250px] flex flex-col justify-center items-center h-auto min-h-screen w-auto min-w-fit">
      <div>
        {!details.name ? (
          <Loading />
        ) : (
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Card details={details} />
          </ErrorBoundary>
        )}
      </div>
    </div>
  );
};

export default PokemonDetails;
