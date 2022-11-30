import {
  FETCH_USERS,
  GET_ACCOUNT,
  RESET_PROFILE,
  UPDATE_USER,
} from '../../mutation-types';

export default {
  [FETCH_USERS](state, { users, pagination }) {
    state.items = users;
    state.pagination = pagination;
  },

  [UPDATE_USER](state, payload) {
    const index = state.items.findIndex((item) => item.id === payload.id);
    if (index !== -1) state.items.splice(index, 1, payload);
  },
  
  [GET_ACCOUNT](state, account) {
    state.account = account;
  },

  [RESET_PROFILE](state) {
    state.account = {};
  },
};
