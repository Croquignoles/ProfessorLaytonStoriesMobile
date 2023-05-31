//Gestionnaire des services API liés aux solutions

const rootEndpoint =
  "https://enschubachertavardpls.azurewebsites.net/api/SolutionApi";
const rootImages =
  "https://enschubachertavardpls.azurewebsites.net/img/solution/";

export class Solution {
  constructor(id, content, urlImg, enigmaId, enigma) {
    this.id = id;
    this.content = content;
    this.urlImg = urlImg;
    this.enigmaId = enigmaId;
    this.enigma = enigma;
  }
}

//récupère la liste des solutions
class SolutionService {
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

export default new SolutionService();
