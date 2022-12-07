import { axios } from "../../boot/axios";
import all from "./all";

const success = (data, resolve, chapterId) => {
  all(chapterId);
  resolve(data);
};

const failed = (errors, reject) => {
  reject(errors);
};

export default (id, chapterId) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`/questions/${id}`)
      .then((response) => {
        success(response.data, resolve, chapterId);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  });
