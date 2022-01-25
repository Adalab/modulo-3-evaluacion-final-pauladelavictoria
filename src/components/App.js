// Estilos
import "../style/App.scss";
// Hooks
import { Link, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
// Componentes
// API
import CallToApi from "../services/Api";
// Imágenes
import hpIcon from "../images/hpIcon.png";
import CharacterList from "./CharacterList";

const App = () => {
  // Variables estado
  const [gryData, setGryData] = useState([]);

  useEffect(() => {
    CallToApi().then(data => 
      setGryData(...gryData, data));
  }, []);
 

  console.log(gryData);

  return (
    <div>
      <img className="logoHeader" src={hpIcon} alt="Logo de Harry Potter" />
      <h1>HARRY POTTER</h1>
      <CharacterList gryData={gryData}/>
    </div>
  );
};

export default App;
