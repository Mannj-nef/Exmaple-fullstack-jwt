import axios from "axios";

const baseURL = process.env.REACT_APP_API_ENDPOINT;

const axiosClient = axios.create({
  baseURL,
});

export default axiosClient;
