import Character from './Character';

const CharacterList = (props) => {
  const characterData = props.gryData.map((character) => {
    return <Character character={character}/>
  });

  return <ul className="characterCards">{characterData}</ul>;
};

export default CharacterList;
