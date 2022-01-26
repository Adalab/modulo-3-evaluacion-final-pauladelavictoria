// Estilos
import "../style/App.scss";
// Hooks
import { Link, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
// Componentes
import Characterdetails from "./Characterdetails";
import Filters from "./Filters";
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
  const [filterHouse, setFilterHouse] = useState("gryffindor");

  // useEffect
  useEffect(() => {
    CallToApi(filterHouse).then((data) => setCharacterData(data));
  }, [filterHouse]);

  // Filtros
  const handleFilter = (ev) => {
    console.log(ev.currentTarget.name);
    if (ev.currentTarget.name === "name") {
      setFilterName(ev.currentTarget.value);
    }
    if (ev.currentTarget.name === "house") {
      setFilterHouse(ev.currentTarget.value.toLowerCase());
    }
  };

  const filteredCharacters = characterData.filter((filterCharName) => {
    return filterCharName.name.toLowerCase().includes(filterName.toLowerCase())
  });

  

  // Character details
  const renderCharacterDetails = (props) => {
    const routeId = props.match.params.charId;
    const foundCharacter = characterData.find(
      (character) => character.name === routeId
    );
    return (
      <Characterdetails
        character={foundCharacter}
        characterData={characterData}
      />
    );
  };

  return (
    <div className="main">
      <header className="header">
      <img className="header_logo" src={hpIcon} alt="Logo de Harry Potter" />
      <h1 className="header_title">HARRY POTTER</h1> 
      </header>
      <Switch>
        <Route path="/" exact>
          <Filters
            handleFilter={handleFilter}
            filterHouse={filterHouse}
            filterName={filterName}
          />
          <CharacterList
            characterData={characterData}
            filteredCharacters={filteredCharacters}
          />
        </Route>

        <Route
          path="/characterdetails/:charId"
          render={renderCharacterDetails}
        ></Route>
      </Switch>
    </div>
  );
};

export default App;
