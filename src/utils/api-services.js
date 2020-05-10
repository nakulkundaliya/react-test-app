import axios from 'axios/index';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  // headers: { 'X-Custom-Header': 'foobar' }
});

const apiServices = () => {
  const getRepo = (username) => {
    return api.get(`/users/${username}/repos`)
  }

  const getRepoReadMe = (username, reponame) => {
    const config = {
      headers: {
        "Accept": "application/vnd.github.VERSION.raw"
      }
    }
    return api.get(`/repos/${username}/${reponame}/readme`, config, config)

  }
  return {
    getRepo,
    getRepoReadMe
  }
}

export default {
  apiServices
}