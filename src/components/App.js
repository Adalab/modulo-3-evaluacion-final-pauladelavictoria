// Estilos
import "../style/App.scss";
// Hooks
// import { Link, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
// Componentes
// import Filters from "./Filters";
import CharacterList from "./CharacterList";

// API
import CallToApi from "../services/Api";
// Imágenes
import hpIcon from "../images/hpIcon.png";

const App = () => {
  // Variables estado
  const [characterData, setCharacterData] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");
  const [filterHouse, setFilterHouse] = useState('gryffindor');

  // useEffect
  useEffect(() => {
    CallToApi(filterHouse).then((data) => setCharacterData(data));
  }, [filterHouse]);

  // Filtros
  const handleFilter = (ev) => {
    console.log(ev.currentTarget.name)
    if (ev.currentTarget.name === 'name') {
      setFilterName(ev.currentTarget.value);
    }
    if(ev.currentTarget.name === 'house') {
      setFilterHouse(ev.currentTarget.value.toLowerCase())
    }
  };

  const filteredCharacters = characterData.filter((filterCharName) => {
    return filterCharName.name.toLowerCase().includes(filterName.toLowerCase());
  });
  

  return (
    <div>
      <img className="logoHeader" src={hpIcon} alt="Logo de Harry Potter" />
      <h1>HARRY POTTER</h1>
      <label className="form__label" htmlFor="name">
        Buscar personaje por nombre:{" "}
      </label>

      <input
        className="form__input"
        type="text"
        name="name"
        id="name"
        onChange={handleFilter}
        value={filterName}
      />
      <label className="label" htmlFor="numberInput"
          >Escoge entre estas opciones:</label
        >
        <select
        className="form__input"
          name="house"
          id="house"
          onChange={handleFilter}
          >
          <option defaultValue={filterHouse}  disabled>Selecciona la casa:</option>
          <option selected>Gryffindor</option>
          <option >Slytherin</option>
          <option >Ravenclaw</option>
          <option >Hufflepuff</option>
        </select>
      {/* <Filters  handleFilter={handleFilter}/> */}
      <CharacterList
        characterData={characterData}
        filteredCharacters={filteredCharacters}
      />
    </div>
  );
};

export default App;
