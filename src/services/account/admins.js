import { axios } from "../../boot/axios";
const success = (data, resolve) => {
  resolve(data);
};

const failed = (errors, reject) => {
  reject(errors);
};

export default () =>
  new Promise((resolve, reject) => {
    axios
      .get(`/admins`)
      .then((response) => {
        success(response.data, resolve);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });
