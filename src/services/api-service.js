export class ApiService {
  async fetch(url, delay = 0, obj = {}) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    const response = await fetch(url, obj);
    return await response.json();
  }
}
