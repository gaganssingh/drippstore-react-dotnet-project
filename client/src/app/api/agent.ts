import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL =
  import.meta.env.VITE_API_URL || `http://localhost:5000/api`;

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Catalog = {
  allProducts: () => requests.get(`/products`),
  productDetails: (id: number) => requests.get(`/products/${id}`),
};

const TestErrors = {
  get400Error: () => requests.get("errorhandler/bad-request"),
  get401Error: () => requests.get("errorhandler/unauthorized"),
  get404Error: () => requests.get("errorhandler/not-found"),
  get500Error: () => requests.get("errorhandler/server-error"),
  getValidationError: () => requests.get("errorhandler/validation-error"),
};

export const agent = {
  Catalog,
  TestErrors,
};
