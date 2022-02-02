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
  const defaultSpecies = {
    human: true,
    werewolf: true,
    halfGiant: true,
    ghost: true,
  };
  // localstorage
  const localStorageName = localstorage.get("lsname", "");
  const localStorageHouse = localstorage.get("lshouse", "Gryffindor");
  const localStorageSpecies = localstorage.get("lsspecies", defaultSpecies);
  const localStorageGender = localstorage.get("lsgender", "all");
  console.log(localStorageGender);

  // Variables estado
  const [characterData, setCharacterData] = useState([]);
  const [filterName, setFilterName] = useState(localStorageName);
  const [filterHouse, setFilterHouse] = useState(localStorageHouse);
  const [speciesFilter, setSpeciesFilter] = useState(
    localStorageSpecies
  );
  const [filterGender, setFilterGender] = useState(localStorageGender);
console.log(filterGender);
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
    if (name === "house") {
      setFilterHouse(value);
      localstorage.set("lshouse", value);
    }
    if (
      name === "human" ||
      name === "werewolf" ||
      name === "halfGiant" ||
      name === "ghost"
    ) {
      setSpeciesFilter({ ...speciesFilter, [name]: value });
      localstorage.set(
        "lsspecies",
        JSON.stringify({ ...speciesFilter, [name]: value })
      );
    }
    if (name === "gender") {
      setFilterGender(value);
      localstorage.set("lsgender", value);
    }
  };

  const handleSpeciesReset = () => {
    setSpeciesFilter(defaultSpecies);
    localstorage.set("lsspecies", JSON.stringify(defaultSpecies));
  };

  // console.log(speciesFilter.human, speciesFilter['human']);

  const filteredCharacters = characterData
    .filter((filterChar) => {
      return filterChar.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((filterChar) => {
      if (filterChar.species === "human") {
        return speciesFilter.human;
      } else if (filterChar.species === "werewolf") {
        return speciesFilter.werewolf;
      } else if (filterChar.species === "halfGiant") {
        return speciesFilter.halfGiant;
      } else if (filterChar.species === "ghost") {
        return speciesFilter.ghost;
      }
      return false;
      // return speciesFilter[filterChar.species]
    })
    .filter((filterChar) => {
      if (filterGender === 'female') return filterChar.gender === 'female'
      else if (filterGender === 'male') return filterChar.gender === 'male'
      return true
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
            handleSpeciesReset={handleSpeciesReset}
            characterData={characterData}
            filterHouse={filterHouse}
            filterName={filterName}
            filterGender={filterGender}
            speciesFilter={speciesFilter}
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
