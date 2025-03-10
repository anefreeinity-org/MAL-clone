export class JikanService {
  constructor() {
    this.url = "https://api.jikan.moe/v4";
  }

  // async fetchWithRetry(url, retries = 5, delay = 1000) {
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`Request failed with status: ${response.status}`);
  //     }
  //     return response.json();
  //   } catch (error) {
  //     if (retries > 0 && error.message.includes('429')) {
  //       console.log(`Rate limit hit, retrying in ${delay / 1000} seconds...`);
  //       await new Promise(resolve => setTimeout(resolve, delay)); // wait for `delay` time
  //       return this.fetchWithRetry(url, retries - 1, delay * 2); // retry with exponential backoff
  //     } else {
  //       throw error;
  //     }
  //   }
  // }

  async getSeasonalAnime(page = 1) {
    const response = await fetch(`${this.url}/seasons/now?page=${page}`);
    return await response.json();
  }

  async getRecommendedAnime(page = 2) {
    const response = await fetch(`${this.url}/seasons/now?page=${page}`);
    return await response.json();
  }

  async getPopularAnime(page = 3) {
    const response = await fetch(`${this.url}/seasons/now?page=${page}`);
    return await response.json();
  }


  // constructor() {
  //   this.url = "https://api.jikan.moe/v4";
  //   this.requestCount = 0; // Initialize request count
  //   this.lastRequestTime = 0; // Initialize last request time
  // }

  // async getSeasonalAnime(page = 1) {
  //   await this.throttleRequests();
  //   const response = await fetch(`${this.url}/seasons/now?page=${page}`);
  //   return await response.json();
  // }

  // async getRecommendedAnime(page = 2) {
  //   await this.throttleRequests();
  //   const response = await fetch(`${this.url}/seasons/now?page=${page}`);
  //   return await response.json();
  // }

  // async getPopularAnime(page = 3) {
  //   await this.throttleRequests();
  //   const response = await fetch(`${this.url}/seasons/now?page=${page}`);
  //   return await response.json();
  // }
  // // Function to implement rate limiting
  // async throttleRequests() {
  //   this.requestCount++;
  //   const currentTime = Date.now();
  //   // If more than 5 requests are made within a second, delay for a second
  //   if (this.requestCount > 5 && currentTime - this.lastRequestTime < 1000) {
  //     await new Promise(resolve => setTimeout(resolve, 1000));
  //     this.requestCount = 0; // Reset count after delay
  //     this.lastRequestTime = Date.now();
  //   }
  //   // If a second has passed, reset request count and update last request time
  //   if (currentTime - this.lastRequestTime >= 1000) {
  //     this.requestCount = 0;
  //     this.lastRequestTime = currentTime;
  //   }
  // }
}
