import store from "../../store";
import paginationTransformer from "../../transformers/pagination";
import helpers from "../../utils/helpers";

import { axios } from "../../boot/axios";
const success = ({ data }, options, resolve) => {
  const notifications = data.data;
  const pagination = paginationTransformer.fetch(data.pagination);
  store.dispatch("fetchNotifications", { notifications, pagination });

  resolve({ notifications, pagination });
};

const failed = (error, reject) => reject(error);

export default (options = {}) =>
  new Promise((resolve, reject) => {
    axios
      .get(helpers.buildUrl("/api/notifications", options))
      .then((response) => {
        success(response, options, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
