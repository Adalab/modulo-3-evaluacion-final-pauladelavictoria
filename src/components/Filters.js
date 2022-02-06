import gryfilter from "../images/gryfilter.png";
import hufffilter from "../images/hufffilter.png";
import ravfilter from "../images/ravfilter.png";
import slyfilter from "../images/slyfilter.png";
import search from "../images/search.png";
import reset from "../images/reset.png";

// Filtros
const Filters = (props) => {
  const handleFilter = (ev) => {
    console.log(
      ev.currentTarget.name,
      ev.currentTarget.value || ev.currentTarget.id
    );
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
        {/* Filtro por casas */}
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
      </div>

      {/* ---FORMULARIO FILTROS */}
      <form className={`form`} onSubmit={(ev) => ev.preventDefault()}>
        {/* Buscar personajes por nombre */}
        <img className="filter_icon-search" src={search} alt="Icono lupa" />
        <input
          className="form_input"
          type="text"
          name="name"
          placeholder="Character search"
          onChange={handleFilter}
          value={props.filterName}
        />

        <div className="container_gender">
          {/* Buscar personajes por sexo*/}
          <label className="screen_reader">
            Elige los personajes según su sexo:
          </label>

          <div>
            <input
              className="hidden"
              name="gender"
              id="all"
              value="all"
              type="radio"
              checked={props.filterGender === "all"}
              onChange={handleFilter}
            />
            <label className="label" htmlFor="all">
              All
            </label>
          </div>
          <div>
            <input
              className="hidden"
              name="gender"
              id="female"
              value="female"
              type="radio"
              checked={props.filterGender === "female"}
              onChange={handleFilter}
            />
            <label className="label" htmlFor="female">
              Female
            </label>
          </div>
          <div>
            <input
              className="hidden"
              name="gender"
              id="male"
              value="male"
              type="radio"
              checked={props.filterGender === "male"}
              onChange={handleFilter}
            />
            <label className="label" htmlFor="male">
              Male
            </label>
          </div>
        </div>
        {/* Buscar personajes por especie*/}
        <label className="screen_reader">
          Filtra los personajes según su especie:
        </label>
        <input
          className="hidden"
          id="human"
          type="checkbox"
          name="species"
          checked={props.speciesFilter.human}
          onChange={handleSpeciesFilter}
        />
        <label className="label" htmlFor="human">
          Human
        </label>
        <input
          className="hidden"
          id="ghost"
          type="checkbox"
          name="species"
          checked={props.speciesFilter.ghost}
          onChange={handleSpeciesFilter}
        />
        <label className="label" htmlFor="ghost">
          Ghost
        </label>
        <input
          className="hidden"
          id="halfGiant"
          type="checkbox"
          name="species"
          checked={props.speciesFilter.halfGiant}
          onChange={handleSpeciesFilter}
        />
        <label className="label" htmlFor="halfGiant">
          halfGiant
        </label>
        <input
          className="hidden"
          id="werewolf"
          type="checkbox"
          name="species"
          checked={props.speciesFilter.werewolf}
          onChange={handleSpeciesFilter}
        />
        <label className="label" htmlFor="werewolf">
          werewolf
        </label>
        {/* {['human', 'ghost', 'halfGiant', 'werewolf'].map((eachSpecies) => 
              <label htmlFor={eachSpecies}>
                <input id={eachSpecies} type="checkbox" name="species" checked={props.speciesFilter[eachSpecies]} onChange={handleSpeciesFilter}/>
                {eachSpecies}
            </label>
            )} */}

        {/* Buscar actor/actriz por nombre */}
        <div className="container_actor">
          <img className="filter_icon-search" src={search} alt="Icono lupa" />
          <input
            className="form_input"
            type="text"
            name="actor"
            placeholder="Actor search"
            onChange={handleFilter}
            value={props.filterActor}
          />
        </div>

        <div>
          <button type="reset" onClick={handleReset}>
            <img
              className="filter_icon-reset"
              src={reset}
              alt="Escoba de Harry Potter, icono para borrar los datos"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
