import { useState } from "react";
import hpIcon from "../images/hpIcon.png";
import arrow2 from "../images/arrow.png";
import reset from "../images/reset.png";
import gryfilter from "../images/gryfilter.png";
import hufffilter from "../images/hufffilter.png";
import ravfilter from "../images/ravfilter.png";
import slyfilter from "../images/slyfilter.png";

// Filtros
const Filters = (props) => {
  const [showFilters, setShowFilters] = useState(false);

  const renderFilters = () => {
    setShowFilters(!showFilters);
  };
  const handleFilter = (ev) => {

    console.log(ev.currentTarget.name, ev.currentTarget.value || ev.currentTarget.id);
    props.handleFilter(
      ev.currentTarget.name,
      ev.currentTarget.value || ev.currentTarget.id
    );
  };

  const handleSpeciesFilter = (ev) => {
    console.log(ev.currentTarget.id, ev.currentTarget.checked);
    props.handleFilter(ev.currentTarget.id, ev.currentTarget.checked);
  };

  // Reset
  const handleReset = () => {
    props.handleFilter("name", "");
    props.handleFilter("house", "Gryffindor");
    props.handleFilter("gender", "all");
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
        <ul className="filter_houses">
          <li>
            <img
              src={gryfilter}
              className={props.filterHouse === "Gryffindor" ? "selected" : ""}
              alt="Bandera de Gryffindor"
              id="Gryffindor"
              name="house"
              onClick={handleFilter}
            />
          </li>
          <li>
            <img
              src={hufffilter}
              className={props.filterHouse === "Hufflepuff" ? "selected" : ""}
              alt="Bandera de Hufflepuff"
              id="Hufflepuff"
              name="house"
              onClick={handleFilter}
            />
          </li>
          <li>
            <img
              src={slyfilter}
              className={props.filterHouse === "Slytherin" ? "selected" : ""}
              alt="Bandera de Slytherin"
              id="Slytherin"
              name="house"
              onClick={handleFilter}
            />
          </li>
          <li>
            <img
              src={ravfilter}
              className={props.filterHouse === "Ravenclaw" ? "selected" : ""}
              alt="Bandera de Ravenclaw"
              id="Ravenclaw"
              name="house"
              onClick={handleFilter}
            />
          </li>
        </ul>

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

          <div>
            <label className="form_label">
              Elige los personajes según su sexo:
            </label>
            <div>
              <label htmlFor="gender">
                <input
                  name="gender"
                  id="female"
                  value="female"
                  type="radio"
                  checked={props.filterGender === "female"}
                  onChange={handleFilter}
                />
                Mujer
              </label>
            </div>
            <div>
              <label htmlFor="gender">
                <input
                  name="gender"
                  id="male"
                  value="male"
                  type="radio"
                  checked={props.filterGender === "male"}
                  onChange={handleFilter}
                />
                Hombre
              </label>
            </div>
            <div>
              <label htmlFor="gender">
                <input
                  name="gender"
                  id="all"
                  value="all"
                  type="radio"
                  checked={props.filterGender === "all"}
                  onChange={handleFilter}
                />
                Todas las personas
              </label>
            </div>

            <label className="form_label">
              Filtra los personajes según su especie:
            </label>
            <label htmlFor="human">
              <input
                id="human"
                type="checkbox"
                name="species"
                checked={props.speciesFilter.human}
                onChange={handleSpeciesFilter}
              />
              Humana
            </label>
            <label htmlFor="ghost">
              <input
                id="ghost"
                type="checkbox"
                name="species"
                checked={props.speciesFilter.ghost}
                onChange={handleSpeciesFilter}
              />
              Fantasma
            </label>
            <label htmlFor="halfGiant">
              <input
                id="halfGiant"
                type="checkbox"
                name="species"
                checked={props.speciesFilter.halfGiant}
                onChange={handleSpeciesFilter}
              />
              Mitad gigante
            </label>
            <label htmlFor="werewolf">
              <input
                id="werewolf"
                type="checkbox"
                name="species"
                checked={props.speciesFilter.werewolf}
                onChange={handleSpeciesFilter}
              />
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
