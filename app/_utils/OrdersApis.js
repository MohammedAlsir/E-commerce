const { default: axiosClient } = require("./axiosClient");

const addToOrder = (payload) => axiosClient.post("/orders", payload);

export default {
  addToOrder,
};
