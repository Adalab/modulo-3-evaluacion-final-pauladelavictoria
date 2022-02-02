import Character from "./Character";

// const CharacterList = (props) => {
//   const characterData = props.filteredCharacters.map((character, index) => {
//     return <Character character={character} key={index} />;
//   });

//   const renderCharacterList = () => {
//     if (characterData.length >= 1) {
//      return characterData
//     } else {
//       return "No existe el personaje que buscas"
//     }
//   }

//   return (
//     <ul className="characterCards">
//       {renderCharacterList()}
//     </ul>
//   );
// };

const CharacterList = (props) => {
  return (
    <ul className="characterCards">
      {props.filteredCharacters.length >= 1
        ? props.filteredCharacters.map((character, index) => {
            return <Character character={character} key={index} />;
          })
        : "No existe el personaje que buscas"}
    </ul>
  );
};

export default CharacterList;
