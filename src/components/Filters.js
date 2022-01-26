import hpIcon from "../images/hpIcon.png";
import arrow from "../images/arrow.png";
const Filters = (props) => {
    return (
    
<div>
  <div onClick={props.renderFilters}>
<img className="filter_logo" src={hpIcon} alt="Logo de Harry Potter" />
<img className="filter_arrow" src={arrow} alt="Icono flecha" />
<p className="filter_text">Pincha aquí para filtrar la búsqueda</p>
</div>
        <form className='form collapse' onSumbit={(ev)=>ev.preventDefault()}>
        <label className="form_label" htmlFor="name">
        Buscar personaje por nombre:{" "}
      </label>

      <input
        className="form_input"
        type="text"
        name="name"
        id="name"
        onChange={props.handleFilter}
        value={props.filterName}
      />
      <label className="form_label" htmlFor="numberInput"
          >Escoge entre estas opciones:</label
        >
        <select
        className="form_input"
          name="house"
          id="house"
          onChange={props.handleFilter}
          >
          <option defaultValue={props.filterHouse}  disabled>Selecciona la casa:</option>
          <option selected>Gryffindor</option>
          <option >Slytherin</option>
          <option >Ravenclaw</option>
          <option >Hufflepuff</option>
        </select>
        </form>
        </div>
    );
  };
  
  export default Filters;