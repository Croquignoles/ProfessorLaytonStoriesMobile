//Gestionnaire des services API liés aux indices

const rootEndpoint =
  "https://enschubachertavardpls.azurewebsites.net/api/HintsApi";

export class Hint {
  constructor(id, content, hintRange, enigmaId, enigma) {
    this.id = id;
    this.content = content;
    this.hintRange = hintRange;
    this.enigmaId = enigmaId;
    this.enigma = enigma;
  }
}

//Récupère la liste des indices
class HintService {
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

export default new HintService();
