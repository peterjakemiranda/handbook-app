/* ============
 * Vuex Getters
 * ============
 *
 * All the getters that can be used
 * inside the store
 */

// Sidebar
export const sidebarStatus = (state) => state.sidebar.status;

// Auth
export const isAuthenticated = (state) => state.auth.authenticated;
export const twoFactorVerification = (state) =>
  state.auth.twoFactorVerification;
export const isInMaintenance = (state) => state.auth.maintenance;

// Profile
export const account = (state) => state.profile.account;
export const allUsers = (state) => ({
  items: state.profile.items,
  pagination: state.profile.pagination,
});

// Chapters
export const chapters = (state) => ({
  items: state.chapter.items,
  pagination: state.chapter.pagination,
});
export const allChapters = (state) => state.chapter.all;
export const chapterQuery = (state) => state.chapter.query;

// Sections
export const sections = (state) => ({
  items: state.section.items,
  pagination: state.section.pagination,
});
export const allSections = (state) => state.section.all;
export const searchResults = (state) => state.section.searchResults;
export const sectionQuery = (state) => state.section.query;

// Sections
export const questions = (state) => ({
  items: state.question.items,
  pagination: state.question.pagination,
});
export const allQuestions = (state) => state.question.all;
export const questionSearchResults = (state) => state.question.searchResults;
export const questionQuery = (state) => state.question.query;

// Bookmarks
export const allBookmarks = (state) => state.bookmark.all;
