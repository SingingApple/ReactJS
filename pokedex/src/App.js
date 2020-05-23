import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
function App() {
  const [pokedex, setPokedex] = useState([]);
  const [wildPokemon, setWildPokemon] = useState({});
  useEffect(() => {
    encounterWildPokemon();
  }, [pokedex]);
  const encounterWildPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/151")
      .then((response) => {
        console.log(response.data);
        setWildPokemon(response.data.name);
      })
      .catch((err) => console.log(err));
  };
  return <div className="App">{wildPokemon[0]}</div>;
}

export default App;
