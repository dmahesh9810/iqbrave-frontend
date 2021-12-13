import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/api/';

class UserService {
  getGSG() {
    return axios.get(API_URL + 'gsg');
  }
  getTime() {
    return axios.get(API_URL + 'time');
  }
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
  // my setup
  getCoin() {
    return axios.get(API_URL + 'getcoins', { headers: authHeader() });
  }
  getSellGcCoin() {
    return axios.get(API_URL + 'getsellcoins', { headers: authHeader() });
  }
}

export default new UserService();