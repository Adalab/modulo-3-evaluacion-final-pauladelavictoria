import Character from "./Character";

const CharacterList = (props) => {
  const characterData = props.filteredCharacters.map((character, index) => {
    return <Character character={character} key={index} />;
  });

  return <ul className="characterCards">{characterData}</ul>;
};

export default CharacterList;
