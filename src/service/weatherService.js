import Axios from 'axios';
import 'url'
let service;
class weatherService {
  constructor() {
    this.BASEURL = 'https://dataservice.accuweather.com';
  }

  async getLocation(longtitude, latitude) {
    const cords = `${longtitude},${latitude}`;
    const locationApiAction = 'cities/geoposition/search?';
    const params = new URLSearchParams({
      apikey: process.env.VUE_APP_ACCUWEATHER_API_KEY,
      q: cords,
      language: 'en-us',
      details: 'true',
      toplevel: 'false'
    });
    const url = `${this._apiService('locations', locationApiAction + params.toString())}`;
    return await Axios.get(url)
  }

  async getCurrentWeather(locationKey) {
    const params = new URLSearchParams({
      apikey: process.env.VUE_APP_ACCUWEATHER_API_KEY,
      language: 'en-us',
      details: false
    });
    const url = this._apiService('currentconditions', locationKey + '?' + params.toString());
    return await Axios.get(url);
  }

  _apiService(apiService, action) {
    const service = `${this.BASEURL}/${apiService}/v1/${action}`;
    return service;
  }
};

export default service = new weatherService();
