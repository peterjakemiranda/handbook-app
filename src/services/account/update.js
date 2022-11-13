import accountService from ".";
import store from "../../store";
import { router } from "../../router";
import { axios } from "../../boot/axios";

/**
 * When the request succeeds
 */
const success = (response, resolve) => {
  accountService.find().then(() => {
    resolve();
  });
};

/**
 * When the request fails
 */
const failed = (error, reject) => {
  return reject(error.response.data);
};

export default (user, id = null) =>
  new Promise((resolve, reject) => {
    axios
      .put(id ? `api/account/${id}` : "api/account", user)
      .then((response) => {
        success(response.data, resolve);
      })
      .catch((error) => {
        failed(error, reject);
      });
  });
