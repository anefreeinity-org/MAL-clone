export class JikanService {
  constructor() {
    this.url = "https://api.jikan.moe/v4";
  }

  async getSeasonalAnime(page = 1) {
    const response = await fetch(`${this.url}/seasons/now?page=${page}`);
    return await response.json();
  }
}
