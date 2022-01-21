import axios from "axios";

import errorResponseHandler from "./errorResponseHandler";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`,
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorResponseHandler(error);
  }
);

export default instance;
