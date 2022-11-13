import {
  FETCH_USERS,
  GET_ACCOUNT,
  RESET_PROFILE,
} from '../../mutation-types';

export default {
  [FETCH_USERS](state, { users, pagination }) {
    state.items = users;
    state.pagination = pagination;
  },
  
  [GET_ACCOUNT](state, account) {
    state.account = account;
  },

  [RESET_PROFILE](state) {
    state.account = {};
  },
};
