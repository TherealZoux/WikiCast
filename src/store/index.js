// store.js


import { createStore } from "vuex";
import { fetchcasts, fetchEpisodes } from "@/services/SpotifyService";

export default createStore({
  state: {
    shows: [],
    episodes: [],
    profile: {},
    error: null,
    authToken: null,
  },

  mutations: {
    SET_SHOWS(state, data) {
      state.shows = data;
    },
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_EPISODES(state, data) {
      state.episodes = data;
    },
    SET_AUTH_TOKEN(state, token) {
      state.authToken = token;
    },
    CLEAR_AUTH_TOKEN(state) {
      state.authToken = null;
    },
  },

  actions: {
    async fetchData({ commit }) {
      commit('SET_ERROR', null);
      try {
        const data = await fetchcasts();
        commit('SET_SHOWS', data);
      } catch (error) {
        commit('SET_ERROR', error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async fetchEpisodes({ commit }, showId) {
      try {
        const episodes = await fetchEpisodes(showId);
        commit('SET_EPISODES', episodes.items);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    },
    setAuthToken({ commit }, token) {
      commit('SET_AUTH_TOKEN', token);
    },
    clearAuthToken({ commit }) {
      commit('CLEAR_AUTH_TOKEN');
    },
  },

  getters: {
    shows: state => state.shows,
    episodes: state => state.episodes,
    isLoading: state => state.loading,
    error: state => state.error,
    isAuthenticated: state => !!state.authToken,
    authToken: state => state.authToken,
  }
});

