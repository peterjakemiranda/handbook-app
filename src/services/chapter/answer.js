import { axios } from "../../boot/axios";
const success = (data, resolve) => {
  resolve(data);
};

const failed = (errors, reject) => {
  reject(errors);
};

export default (id) =>
  new Promise((resolve, reject) => {
    axios
      .post(`/api/chapters/${id}/answer`)
      .then((response) => {
        success(response.data, resolve);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });