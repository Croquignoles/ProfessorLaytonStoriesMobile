//Gestionnaire des services API liés aux jeux de la licence

const rootEndpoint =
  "https://enschubachertavardpls.azurewebsites.net/api/gamesapi";
const rootImages = "https://enschubachertavardpls.azurewebsites.net/img/game/";

export class Game {
  constructor(id, title, releaseDate, description, image1, image2, image3) {
    this.id = id;
    this.title = title;
    this.releaseDate = releaseDate;
    this.description = description;
    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;
  }
}

class GameService {
  //Cherche un jeu par son nom
  async searchGameByName(name) {
    const games = await this.fetchFromApi(
      `${rootEndpoint}/search.php?s=${name.trim()}`
    );
    return games;
  }

  //Récupère le lien d'une image d'un jeu dans la base de données
  getImageUriByName(imgName) {
    const uri = rootImages + imgName;
    return uri;
  }

  //Cherche un jeu par son identifiant
  async findGameById(id) {
    const games = await this.fetchFromApi(`${rootEndpoint}/lookup.php?i=${id}`);
    return games[0];
  }

  //Récupère la liste des jeux
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
}

export default new GameService();
