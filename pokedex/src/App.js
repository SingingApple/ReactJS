import React, { useState, useContext } from "react";
import axios from "axios";
function App() {
  const [pokedex, setPokedex] = useState([]);
  const [wildPokemon, setWildPokemon] = useState({});
  useEffect(() => {
    encounterWildPokemon();
  }, [pokedex]);
  const encounterWildPokemon = () => {
    axios
      .get("https://pokeapi.co/api/pokemon/12")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  return <div className="App"></div>;
}

export default App;
