//Gestionnaire des services API liés aux personnages

const rootEndpoint =
  "https://enschubachertavardpls.azurewebsites.net/api/charactersapi";
const rootImages =
  "https://enschubachertavardpls.azurewebsites.net/img/character/";

export class Character {
  constructor(
    id,
    firstname,
    lastname,
    isBadGuy,
    description,
    urlImg1,
    urlImg2,
    urlImg3
  ) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.isBadGuy = isBadGuy;
    this.description = description;
    this.urlImg1 = urlImg1;
    this.urlImg2 = urlImg2;
    this.urlImg3 = urlImg3;
  }
}

class CharacterService {
  //Récupération des personnages
  async fetchFromApi(query) {
    console.log(`Fetching API with query ${query}`);
    try {
      const response = await fetch(query);
      // FIXME: JSON parse error when ingredient is not found
      const content = await response.json();
      return content;
    } catch (e) {
      console.error(e);
    }
  }

  //récupère le lien pour accéder aux images d'un personnage
  getImageUriByName(imgName) {
    const uri = rootImages + imgName;
    return uri;
  }

  //Cherche un personnage de par son identifiant
  findCharacterById(characterId) {
    console.log(rootEndpoint + "/" + characterId);
    const characters = this.fetchFromApi.bind(this)(
      `${rootEndpoint}/${characterId}`
    );
    return characters[0];
  }
}

export default new CharacterService();
