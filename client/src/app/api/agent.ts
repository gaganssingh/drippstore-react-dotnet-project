// @ts-nocheck
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from "../../main";

axios.defaults.baseURL =
  import.meta.env.VITE_API_URL || `http://localhost:5000/api`;

axios.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    const { data, status } = error.response;
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];
          for (const key in data.errors) {
            data.errors[key] && modelStateErrors.push(data.errors[key]);
          }
          console.log("modelStateErrors", modelStateErrors);
          throw modelStateErrors.flat();
        }

        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title);
        break;
      case 404:
        toast.error(data.title);
        break;
      case 500:
        history.push({
          pathname: `/server-error`,
          state: {
            error: data,
          },
        });
        break;
      default:
        break;
    }
    return Promise.reject(error.response);
  }
);

// HELPER FUNCTION
const responseBody = (response: AxiosResponse) => response.data;

// HELPER OBJECT
const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

// HELPER OBJECT
const Catalog = {
  allProducts: () => requests.get(`/products`),
  productDetails: (id: number) => requests.get(`/products/${id}`),
};

const TestErrors = {
  get400Error: () => requests.get("/errorhandling/bad-request"),
  get401Error: () => requests.get("/errorhandling/unauthorized"),
  get404Error: () => requests.get("/errorhandling/not-found"),
  get500Error: () => requests.get("/errorhandling/server-error"),
  getValidationError: () => requests.get("/errorhandling/validation-error"),
};

export const agent = {
  Catalog,
  TestErrors,
};
