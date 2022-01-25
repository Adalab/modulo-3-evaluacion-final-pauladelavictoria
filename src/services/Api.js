const CallToApi = (filterHouse) => {
  return fetch(`http://hp-api.herokuapp.com/api/characters/house/${filterHouse}`)
    .then((response) => response.json())
    .then((data) => {
      return data.map((dataCharacter) => {
        return {
          name: dataCharacter.name,
          ualternate_names: dataCharacter.alternate_names,
          species: dataCharacter.species,
          house: dataCharacter.house,
          patronus: dataCharacter.patronus,
          alive: dataCharacter.alive,
          image: dataCharacter.image,
        };
      });
    });
};

export default CallToApi;
