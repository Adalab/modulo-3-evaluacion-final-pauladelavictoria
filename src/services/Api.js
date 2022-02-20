const CallToApi = (filterHouse) => {
  return fetch(`https://hp-api.herokuapp.com/api/characters/house/${filterHouse}`)
    .then((response) => response.json())
    .then((data) => {
      return data.map((dataCharacter) => {
        return {
          name: dataCharacter.name,
          species: dataCharacter.species,
          house: dataCharacter.house,
          patronus: dataCharacter.patronus,
          alive: dataCharacter.alive,
          image: dataCharacter.image,
          gender: dataCharacter.gender,
          actor: dataCharacter.actor,
          ancestry: dataCharacter.ancestry
        };
      });
    });
};

export default CallToApi;
