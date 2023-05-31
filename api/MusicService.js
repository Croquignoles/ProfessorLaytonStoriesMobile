//Gestionnaire des services API liés aux musiques

const rootEndpoint =
  "https://enschubachertavardpls.azurewebsites.net/api/MusicsApi";

export class Music {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

class MusicService {
  //Récupère la liste des musiques
  async fetchFromApi(query) {
    try {
      const response = await fetch(query);

      const content = await response.json();
      return content;
    } catch (e) {
      console.error(e);
    }
  }

  //Permet l'ajout d'une musique dans la base de donnée
  async createMusic(nom, lien) {
    const response = await fetch(rootEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nom,
        url: lien,
      }),
    });
    const content = await response.json();
    return new Music(content.name, content.url);
  }

  //Permet la suppression d'une musique dans la base de donnée, de part son identifiant
  async deleteMusic(id) {
    const fulluri = rootEndpoint + "/" + id;
    await fetch(fulluri, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  //Instancie les musiques récupérées par le fetch
  async getAllMusics() {
    const musics = await this.fetchFromApi(rootEndpoint);
    return musics.map((music) => new Music(music.name, music.url));
  }
}

export default new MusicService();
