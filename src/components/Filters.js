import { useState } from "react";
import hpIcon from "../images/hpIcon.png";
import arrow2 from "../images/arrow.png";
import reset from "../images/reset.png";
import filtersimg from "../images/filtersimg.png";

// Filtros
const Filters = (props) => {
  const [showFilters, setShowFilters] = useState(false);
  

  const renderFilters = () => {
    setShowFilters(!showFilters);
  };
  const handleFilter = (ev) => {
    props.handleFilter(ev.currentTarget.name, ev.currentTarget.value);
  };

  const handleSpeciesFilter =(ev) => {
    props.handleFilter(ev.currentTarget.id, ev.currentTarget.checked);
  }

  // Reset
  const handleReset = () => {
    props.handleFilter("name", "");
    props.handleFilter("house", "Gryffindor");
    props.handleSpeciesReset();
  };

  return (
    <div>
      <div className="flexFilters">
        <div onClick={renderFilters}>
          <img
            className="filter_logo"
            src={hpIcon}
            alt="Logo de Harry Potter"
          />
          <img className="filter_arrow" src={arrow2} alt="Icono flecha" />
          <p className="filter_text">
            Pincha aquí para {showFilters ? "ocultar" : "filtrar"} la búsqueda
          </p>
        </div>
        <img
          className="filter_housesimg"
          src={filtersimg}
          alt="Logo de casas de Harry Potter"
        />
        <div className="filter_reset">
          <button type="reset" onClick={handleReset}>
            <img className="filter_resetbtn" src={reset} alt="Icono andén" />
          </button>
          <p className="filter_text">Borra tus búsquedas</p>
        </div>
      </div>

      {showFilters && (
        <form className={`form`} onSubmit={(ev) => ev.preventDefault()}>
          <label className="form_label" htmlFor="name">
            Buscar personaje por nombre:{" "}
          </label>

          <input
            className="form_input"
            type="text"
            name="name"
            id="name"
            onChange={handleFilter}
            value={props.filterName}
          />
          <label className="form_label" htmlFor="numberInput">
            Escoge entre estas opciones:
          </label>
          <select
            className="form_input"
            name="house"
            id="house"
            onChange={handleFilter}
            value={props.filterHouse}
          >
            <option disabled>Selecciona la casa:</option>
            <option id="gryffindor">Gryffindor</option>
            <option id="slytherin">Slytherin</option>
            <option id="ravenclaw">Ravenclaw</option>
            <option id="hufflepuff">Hufflepuff</option>
          </select>
          <div>
            <label className="form_label">
              Filtra los personajes según su especie:
            </label>
            <label htmlFor="human">
              <input id="human" type="checkbox" name="species" checked={props.speciesFilter.human}  onChange={handleSpeciesFilter}/>
              Humana
            </label>
            <label htmlFor="ghost">
              <input id="ghost" type="checkbox" name="species" checked={props.speciesFilter.ghost} onChange={handleSpeciesFilter}/>
              Fantasma
            </label>
            <label htmlFor="halfGiant">
              <input id="halfGiant" type="checkbox" name="species" checked={props.speciesFilter.halfGiant} onChange={handleSpeciesFilter}/>
              Mitad gigante
            </label>
            <label htmlFor="werewolf">
              <input id="werewolf" type="checkbox" name="species" checked={props.speciesFilter.werewolf} onChange={handleSpeciesFilter}/>
              Hombre lobo
            </label>
            {/* {['human', 'ghost', 'halfGiant', 'werewolf'].map((eachSpecies) => 
              <label htmlFor={eachSpecies}>
                <input id={eachSpecies} type="checkbox" name="species" checked={props.speciesFilter[eachSpecies]} onChange={handleSpeciesFilter}/>
                {eachSpecies}
            </label>
            )} */}
          </div>
        </form>
      )}
    </div>
  );
};

export default Filters;
