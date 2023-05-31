//Gestionnaire des services API liés aux énigmes

const rootEndpoint =
  "https://enschubachertavardpls.azurewebsites.net/api/EnigmasApi";
const rootImages =
  "https://enschubachertavardpls.azurewebsites.net/img/enigma/";

export class Enigma {
  constructor(
    id,
    name,
    content,
    urlImage,
    imageFile,
    gameId,
    game,
    music,
    solution,
    hints
  ) {
    this.id = id;
    this.name = name;
    this.content = content;
    this.urlImage = urlImage;
    this.imageFile = imageFile;
    this.gameId = gameId;
    this.game = game;
    this.music = music;
    this.solution = solution;
    this.hints = hints;
  }
}

//Récupère la liste des énigmes
class EnigmaService {
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

  //Récupère le lien d'une énigme
  getImageUriByName(urlImg) {
    const uri = rootImages + urlImg;
    return uri;
  }
}

export default new EnigmaService();
