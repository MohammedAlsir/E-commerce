const { default: axiosClient } = require("./axiosClient");

const addToCart = (payload) => {
  return axiosClient.post("/carts", payload);
};

const getCartData = (email) => {
  return axiosClient.get(`carts?populate[products][populate]=banner&filters[email][$eq]=${email}`);
};

const deleteItem = (id) => {
  return axiosClient.delete("/carts/" + id);
};

export default {
  addToCart,
  getCartData,
  deleteItem,
};
