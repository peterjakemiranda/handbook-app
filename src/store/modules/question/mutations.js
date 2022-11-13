import {
  FETCH_QUESTIONS,
  APPEND_QUESTIONS,
  RESET_QUESTIONS,
  FETCH_ALL_QUESTIONS,
  QUESTION_QUERY,
  UPDATE_QUESTION,
  FETCH_SEARCH_RESULTS,
  SET_SEARCH_TEXT,
} from "../../mutation-types";

export default {
  [FETCH_QUESTIONS](state, { sections, pagination }) {
    state.items = sections;
    state.pagination = pagination;
  },

  [APPEND_QUESTIONS](state, { sections, pagination }) {
    state.items = [...state.items, ...sections];
    state.pagination = pagination;
  },

  [RESET_QUESTIONS](state) {
    state.all = [];
    state.items = [];
    state.searchResults = [];
    state.pagination = {};
  },

  [FETCH_ALL_QUESTIONS](state, sections) {
    state.all = sections;
  },

  [FETCH_SEARCH_RESULTS](state, sections) {
    state.searchResults = sections;
  },

  [QUESTION_QUERY](state, { page, limit, search }) {
    state.query.page = page;
    state.query.limit = limit;
    state.query.search = search;
    state.query.isSet = true;
  },

  [UPDATE_QUESTION](state, payload) {
    const index = state.all.findIndex((item) => item.id === payload.id);
    if (index !== -1) state.all.splice(index, 1, payload);
  },

  [SET_SEARCH_TEXT](state, searchText) {
    state.searchText = searchText;
  },
};
