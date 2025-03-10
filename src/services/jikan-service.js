import { ApiService } from "./api-service";

export class JikanService {
  constructor() {
    this.url = "https://api.jikan.moe/v4";
    this.apiService = new ApiService();
  }

  async getSeasonalAnime(page = 1) {
    const response = await this.apiService.fetch(
      `${this.url}/seasons/now?page=${page}`
    );
    return response;
  }

  async getRecommendedAnime(page = 2) {
    const response = await this.apiService.fetch(
      `${this.url}/seasons/now?page=${page}`
    );
    return response;
  }

  async getPopularAnime(page = 3) {
    const response = await this.apiService.fetch(
      `${this.url}/seasons/now?page=${page}`
    );
    return response;
  }
}
