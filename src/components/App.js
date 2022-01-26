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
import localstorage from '../services/localstorage';



const App = () => {
   
     // localstorage
     const localStorageName = localstorage.get('lsname', '');
     const localStorageHouse= localstorage.get('lshouse', 'Gryffindor');
     
  // Variables estado
  const [characterData, setCharacterData] = useState([]);
  const [filterSpecies, setFilterSpecies] = useState("");
  const [filterName, setFilterName] = useState(localStorageName);
  const [filterHouse, setFilterHouse] = useState(localStorageHouse);


  
  // useEffect
  useEffect(() => {
    console.log(filterHouse);
    CallToApi(filterHouse).then((data) => setCharacterData(data));
  }, [filterHouse]);
  
    
    // Filtros
    const handleFilter = (name, value) => {
      if (name === "name") {
        setFilterName(value);
        localstorage.set('lsname', value);
      }
      if (name === "house") {
      localstorage.set('lshouse', value);
      setFilterHouse(value);
    }
  };

  const filteredCharacters = characterData.filter((filterCharName) => {
    return filterCharName.name.toLowerCase().includes(filterName.toLowerCase())
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

  return (
    <div className={`main ${filterHouse}`}>
      <header className="header">
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
