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
  console.log(localStorageHouse);
  
  // Variables estado
  const [characterData, setCharacterData] = useState([]);
  const [filterSpecies, setFilterSpecies] = useState("");
  const [filterName, setFilterName] = useState(localStorageName);
  const [filterHouse, setFilterHouse] = useState(localStorageHouse);
  console.log(filterHouse);

  // useEffect
  useEffect(() => {
    console.log(filterHouse);
    CallToApi(filterHouse).then((data) => setCharacterData(data));
  }, [filterHouse]);

  // Filtros
  const handleFilter = (name, value) => {
    if (name === "name") {
      setFilterName(value);
      localstorage.set("lsname", value);
    }
    if (name === "house") {
      setFilterHouse(value);
      localstorage.set("lshouse", value);
    }
  };

  const filteredCharacters = characterData.filter((filterCharName) => {
    return filterCharName.name.toLowerCase().includes(filterName.toLowerCase());
  });

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
