import { useState } from "react";
import hpIcon from "../images/hpIcon.png";
import arrow2 from "../images/arrow.png";
import reset from '../images/reset.png';
import filtersimg from '../images/filtersimg.png';


// Filtros
const Filters = (props) => {
  const [showFilters, setShowFilters] = useState(false);

  const renderFilters = () => {
    setShowFilters(!showFilters);
  };
  const handleFilter = (ev) => {
    props.handleFilter(ev.currentTarget.name, ev.currentTarget.value);
  };

  // Reset
const handleReset = () => {
  props.handleFilter('name', '');
  props.handleFilter('house', 'Gryffindor');
}

  return (
    <div>
      <div className="flexFilters">
        <div onClick={renderFilters}>
          <img className="filter_logo" src={hpIcon} alt="Logo de Harry Potter" />
          <img className="filter_arrow" src={arrow2} alt="Icono flecha" />
          <p className="filter_text">Pincha aquí para {showFilters ? 'ocultar' : 'filtrar'} la búsqueda</p> 
        </div>
        <img className="filter_housesimg" src={filtersimg} alt="Logo de casas de Harry Potter" />
        <div className="filter_reset">
          <button type='reset' onClick={handleReset}><img className="filter_resetbtn" src={reset} alt="Icono andén" /></button>
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
          <label className="form_label" htmlFor="actor">
            Buscar personaje por el nombre del actor:
          </label>

          <input
            className="form_input"
            type="text"
            name="actor"
            id="actor"
            onChange={handleFilter}
            value={props.filterActor}
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
        </form>
      )}
    </div>
  );
};

export default Filters;
