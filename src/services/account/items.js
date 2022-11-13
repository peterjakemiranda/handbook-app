import store from "../../store";
import paginationTransformer from "../../transformers/pagination";
import helpers from "../../utils/helpers";

import { axios } from "../../boot/axios";
const success = ({ data }, options, resolve) => {
  const users = data.data;
  const pagination = paginationTransformer.fetch(data.pagination);
  store.dispatch("fetchUsers", { users, pagination });

  resolve({ users, pagination });
};

const failed = (error, reject) => reject(error);

export default (options = {}) =>
  new Promise((resolve, reject) => {
    axios
      .get(helpers.buildUrl("/api/users", options))
      .then((response) => {
        success(response.data, options, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
