import Character from "./Character";

const CharacterList = (props) => {
  return (
    <ul className="characterCards">
      {props.filteredCharacters.length >= 1
        ? props.filteredCharacters.map((character, index) => {
            return <Character filterHouse={props.filterHouse} character={character} key={index} />;
          })
        : <p className="no_result">No existe el personaje que buscas</p>}
    </ul>
  );
};

export default CharacterList;
