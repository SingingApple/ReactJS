import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

const App = () => {
  const [pokedex, setPokedex] = useState([]);
  const [wildPokemon, setWildPokemon] = useState({});
  useEffect(() => {
    console.log(pokedex);
    encounterWildPokemon();
  }, [pokedex]);
  const encounterWildPokemon = () => {
    const random = Math.floor(Math.random() * 10 + 100);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${random}`)
      .then((response) => {
        setWildPokemon(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
    console.log(pokedex);
  };
  const style = {
    border: "1px solid black",
  };
  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${wildPokemon.id}.png
  return (
    <div className="App">
      <Navbar></Navbar>;
      <div className="container">
        <div className="row">
          <div className="col s12 m6 push-m4">
            <div className="card">
              <div className="card-image" style={style}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${wildPokemon.id}.png`}
                  alt=""
                />

                <span
                  onClick={() => setPokedex([...pokedex, wildPokemon])}
                  className="btn-floating halfway-fab waves-effect waves-light red"
                >
                  <i className="material-icons">add</i>
                </span>
                <div className="card-content"></div>
              </div>
              <div className="card-content">
                <span className="card-title grey-text darken-4">
                  {wildPokemon.name}
                </span>
              </div>
            </div>
          </div>
          <div className="col s12 m2 push-m5">
            <button
              onClick={() => encounterWildPokemon()}
              className="btn-floating waves-effect red"
            >
              <i className="material-icons">chevron_right</i>
            </button>
          </div>
        </div>
        <h2 className="center">Your Dex</h2>

        <div id="flex">
          {pokedex.map((poke) => (
            <div className="card">
              <div className="card-image" style={style}>
                <img
                  style={{ height: "90%", margin: "auto auto" }}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${poke.id}.png`}
                  alt=""
                />

                <span
                  onClick={() =>
                    setPokedex(
                      pokedex.filter((pokemon) => {
                        return pokemon.id !== poke.id;
                      })
                    )
                  }
                  className="btn-floating halfway-fab waves-effect waves-light red"
                >
                  <i className="material-icons">close</i>
                </span>
                <div className="card-content"></div>
              </div>
              <div className="card-content">
                <span className="card-title grey-text darken-4">
                  {poke.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
