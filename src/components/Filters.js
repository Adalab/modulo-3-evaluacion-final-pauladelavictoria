
const Filters = (props) => {
    return (
        <form>
        <label className="form__label" htmlFor="name">
        Buscar personaje por nombre:{" "}
      </label>

      <input
        className="form__input"
        type="text"
        name="name"
        id="name"
        onChange={props.handleFilter}
        value={props.filterName}
      />
      <label className="label" htmlFor="numberInput"
          >Escoge entre estas opciones:</label
        >
        <select
        className="form__input"
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
    );
  };
  
  export default Filters;