import { useState } from "react";
import hpIcon from "../images/hpIcon.png";
import arrow from "../images/arrow.png";

const Filters = (props) => {
  const [showFilters, setShowFilters] = useState(false);

  const renderFilters = () => {
    setShowFilters(!showFilters);
  };
  const handleFilter = (ev) => {
    props.handleFilter(ev.currentTarget.name, ev.currentTarget.value);
  };

  return (
    <div>
      <div onClick={renderFilters}>
        <img className="filter_logo" src={hpIcon} alt="Logo de Harry Potter" />

       
            <img className="filter_arrow" src={arrow} alt="Icono flecha" />
            <p className="filter_text">Pincha aquí para {showFilters ? 'ocultar' : 'filtrar'} la búsqueda</p>
          
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
        </form>
      )}
    </div>
  );
};

export default Filters;
