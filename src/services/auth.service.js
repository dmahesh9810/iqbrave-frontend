import axios from 'axios';
// import authHeader from "@/services/auth-header.js";


const API_URL = 'https://backend-re5zx.ondigitalocean.app/api/auth';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'usersignin', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'usersignup', {
      firstname: user.firstname,
      lastname: user.lastname,
      mobile: user.mobile,
      email: user.email,
      country: user.country,
      city: user.city,
      password: user.password,
      confirmpassword: user.confirmpassword
    });
  }
}

export default new AuthService();