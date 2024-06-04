// const axios = require("axios").default;
const { default: axios } = require("axios");

const apiToken = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = "http://localhost:1337/api";

// const axiosClient = axios.post({
//   method: "post",
//   url: apiUrl,
// });

const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: "Bearer " + apiToken,
  },
});
export default axiosClient;
