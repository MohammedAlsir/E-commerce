const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = () => axiosClient.get("/products?populate=*");

const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`);

const getProductListByCategory = (category) =>
  axiosClient.get(`/products?filters[category][$req]=${category}&populate=*`);

export default {
  getLatestProducts,
  getProductById,
  getProductListByCategory,
};
