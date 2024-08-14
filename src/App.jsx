import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
// import Sidebar from "./components/Sidebar";
import PokemonDetails from "./pages/PokemonDetails";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
