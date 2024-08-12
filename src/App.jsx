import { Route, Routes } from "react-router-dom";

// import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import PokemonDetails from "./components/PokemonDetails";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
