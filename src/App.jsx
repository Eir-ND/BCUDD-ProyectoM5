import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
// import Sidebar from "./components/Sidebar";
import PokemonDetails from "./pages/PokemonDetails";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Home />} />
        <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
