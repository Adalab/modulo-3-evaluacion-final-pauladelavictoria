// Estilos
import "../style/App.scss";
// Hooks
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
// Componentes
import Characterdetails from "./Characterdetails";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
// service
import CallToApi from "../services/Api";
import localstorage from "../services/localstorage";
// images
import fondogry from "../images/fondogry.jpg";
import fondosly from "../images/fondosly.jpg";
import fondorav from "../images/fondorav.jpg";
import fondohuff from "../images/fondohuff.jpg";

const App = () => {
  // localstorage
  const localStorageName = localstorage.get("lsname", "");
  const localStorageHouse = localstorage.get("lshouse", "Gryffindor");
  const localStorageActor = localstorage.get("lsactor", "");
  
  
  // Variables estado
  const [characterData, setCharacterData] = useState([]);
  const [filterName, setFilterName] = useState(localStorageName);
  const [filterHouse, setFilterHouse] = useState(localStorageHouse);
  const [filterActor, setFilterActor] = useState(localStorageActor);

  // useEffect
  useEffect(() => {
    CallToApi(filterHouse).then((data) => setCharacterData(data));
  }, [filterHouse]);

  // Filtros
  const handleFilter = (name, value) => {
    if (name === "name") {
      setFilterName(value);
      localstorage.set("lsname", value);
    }
    else if (name === "house") {
      setFilterHouse(value);
      localstorage.set("lshouse", value);
    }
else if (name === "actor") {
  setFilterActor(value);
  localstorage.set("lsactor", value);
}
  };

  const filteredCharacters = characterData.filter((filterCharName) => {
    return filterCharName.name.toLowerCase().includes(filterName.toLowerCase());
  }).filter((character) => {
    return character.actor.toLowerCase().includes(filterActor.toLocaleLowerCase());
  } ) ;

  // Character details
  const renderCharacterDetails = (props) => {
    console.log(props.match.params);
    const routeId = props.match.params.charId;
    const foundCharacter = characterData.find(
      (character) => character.name === routeId
    );
    console.log(foundCharacter);
    return (
      <Characterdetails
        character={foundCharacter}
        characterData={characterData}
      />
    );
  };

  // Background header
  const getHouseBackground = (house) => {
    if (house === "Gryffindor") return fondogry;
    else if (house === "Slytherin") return fondosly;
    else if (house === "Hufflepuff") return fondohuff;
    else if (house === "Ravenclaw") return fondorav;
  };

  return (
    <div className={`main ${filterHouse}`}>
      <header
        className="header"
        style={{ backgroundImage: `url(${getHouseBackground(filterHouse)})` }}
      >
        <h1 className="header_title">Harry Potter</h1>
      </header>
      <Switch>
        <Route path="/" exact>
          <Filters
            handleFilter={handleFilter}
            filterHouse={filterHouse}
            filterName={filterName}
            filterActor={filterActor}
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
