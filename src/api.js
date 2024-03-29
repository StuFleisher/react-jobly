import axios from "axios";
import jwt_decode from 'jwt-decode';


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  static token = "";

  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get a list of all companies filtered by name*/
  static async getAllCompanies(nameLike) { //{nameLike:anderson}
    const queryString = nameLike ? `?nameLike=${nameLike}` : '';

    const data = await this.request(`companies${queryString}`);
    return data.companies;

  }

  /** Get a list of all jobs filtered by title */

  static async getAllJobs(title) {

    const queryString = title ? `?title=${title}` : '';
    const data = await this.request(`jobs${queryString}`);

    return data.jobs;

  }

  /** Get a list of all jobs filtered by company */

  static async getJobsByCompany(company) {

    const queryString = company ? `?title=${company}` : '';
    const data = await this.request(`jobs${queryString}`);

    return data.jobs;

  }

  /** Login for a user */

  static async userLogin(data) {
    const responseData = await this.request('auth/token', data, 'post');
    JoblyApi.token = responseData.token;
    return responseData.token;
  }

  /** Signup for a user */

  static async userSignup(data) {
    const responseData = await this.request('auth/register', data, 'post');
    JoblyApi.token = responseData.token;

    return responseData.token;
  }

  /** Get a user by username */

  static async getUser(username) {
    const responseData = await this.request(`users/${username}`);
    return responseData.user;
  }

  /** Updates user information */

  static async updateUser(data, username){
    const responseData = await this.request(`users/${username}`, data, 'patch')
    return responseData.user;
  }


  /** Logs out a user and sets the token to null */

  static userLogout() {
    JoblyApi.token = null;
  }

  /** Get the username from decoded token. Sets token and returns username.
   * token is a jwt with a username key.
  */

  static getUsernameFromToken(token){
    const { username } = jwt_decode(token);
    JoblyApi.token = token;
    return username;
  }
}


export default JoblyApi;