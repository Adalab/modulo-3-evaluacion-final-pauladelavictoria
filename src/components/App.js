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
// Imágenes
import background from "../images/background.png";
import logo from "../images/Logo.png"

const App = () => {
  const defaultSpecies = {
    human: true,
    werewolf: true,
    halfGiant: true,
    ghost: true,
  };
  // localstorage
  const localStorageName = localstorage.get("lsname", "");
  const localStorageActor = localstorage.get("lsactor", "");
  const localStorageHouse = localstorage.get("lshouse", "Gryffindor");
  const localStorageSpecies = localstorage.get("lsspecies") ? JSON.parse(localstorage.get("lsspecies")) : defaultSpecies;
  const localStorageGender = localstorage.get("lsgender", "all");

  // Variables estado
  const [characterData, setCharacterData] = useState([]);
  const [filterName, setFilterName] = useState(localStorageName);
  const [filterActor, setFilterActor] = useState(localStorageActor);
  const [filterHouse, setFilterHouse] = useState(localStorageHouse);

  const [speciesFilter, setSpeciesFilter] = useState(localStorageSpecies);
  const [filterGender, setFilterGender] = useState(localStorageGender);


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

    else if (
      name === "human" ||
      name === "werewolf" ||
      name === "halfGiant" ||
      name === "ghost"
    ) {
      const newSpeciesFilter = { ...speciesFilter, [name]: value }
      setSpeciesFilter(newSpeciesFilter);
      localstorage.set(
        "lsspecies",
        JSON.stringify(newSpeciesFilter)
      );
    }
    else if (name === "gender") {
      setFilterGender(value);
      localstorage.set("lsgender", value);
    } 
    else if (name === "actor") {
      setFilterActor(value);
      localstorage.set("lsactor", value);
    }
  };

  const handleSpeciesReset = () => {
    setSpeciesFilter(defaultSpecies);
    localstorage.set("lsspecies", JSON.stringify(defaultSpecies));
  };

  // console.log(speciesFilter.human, speciesFilter['human']);

  console.log(typeof speciesFilter);
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
      return filterChar.actor.toLowerCase().includes(filterActor.toLocaleLowerCase());
    })
    .filter((filterChar) => {
      if (filterGender === 'female') return filterChar.gender === 'female'
      else if (filterGender === 'male') return filterChar.gender === 'male'
      return true
    });

  console.log(filteredCharacters);

    // Ordenar alfabéticamente
    filteredCharacters.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }

      return 0;
    });
    

  // Character details
  const renderCharacterDetails = (props) => {
    const routeId = props.match.params.charId;
    const foundCharacter = filteredCharacters.find(
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
    <div className={`container ${filterHouse}`}>
      <div className='main' style={{backgroundImage: `url(${background})`}}>
      <header
        className='header'
      >
        <img className='header_logo' src={logo} alt="Harry Potter characters"/>
        <h1 className='header_title'>Harry Potter characters</h1>
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
            filterActor={filterActor}
          />
          <CharacterList
          filterHouse={filterHouse}
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
    </div>
  );
};

export default App;
