// store.js
import { createStore } from "vuex";
import {
  fetchcasts,
  fetchEpisodes,
  fetchProfile,
  getTopItems,
} from "@/services/SpotifyService";

export default createStore({
  state: {
    shows: [],
    episodes: [],
    profile: {},
    artists: {},
    topShows: [],
    playlists: [],
    loading: true,
    searchQuery: "",
    filteredShows: [],
  },

  mutations: {
    SET_SHOWS(state, data) {
      state.shows = data;
      state.filteredShows = data; // Initialize filteredShows with the full list
    },
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
    SET_EPISODES(state, data) {
      state.episodes = data;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
    SET_FILTERED_SHOWS(state, filteredShows) {
      state.filteredShows = filteredShows;
    },
    SET_PROFILE(state, data) {
      state.profile = data;
    },
    SET_ARTISTS(state, data) {
      state.artists = data;
    },
    SET_TOP_SHOWS(state, data) {
      state.topShows = data;
    },
    SET_PLAYLISTS(state, data) {
      state.playlists = data;
    },
  },

  actions: {
    async fetchData({ commit }) {
      commit("SET_LOADING", true);
      try {
        if (localStorage.getItem("access_token")) {
          const data = await fetchcasts();
          commit("SET_SHOWS", data);
          commit("SET_LOADING", false);
        } else {
          commit("SET_LOADING", false); // Handle the case where there's no token
        }
      } catch (error) {
        console.error("Error fetching shows:", error);
        commit("SET_LOADING", false); // Ensure loading state is turned off on error
      }
    },
    async fetchEpisodes({ commit }, showId) {
      commit("SET_LOADING", true);
      try {
        const episodes = await fetchEpisodes(showId);
        commit("SET_EPISODES", episodes.items);
        commit("SET_LOADING", false);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    },
    filterShows({ commit, state }) {
      const filteredShows = state.shows.filter((show) =>
        show.name.toLowerCase().includes(state.searchQuery.toLowerCase()),
      );
      commit("SET_FILTERED_SHOWS", filteredShows);
    },
    setSearchQuery({ commit, dispatch }, query) {
      commit("SET_SEARCH_QUERY", query);
      dispatch("filterShows");
    },
    async userProfile({ commit }) {
      commit("SET_LOADING", true);
      try {
        const profile = await fetchProfile();
        const artists = await getTopItems(
          "https://api.spotify.com/v1/me/following?type=artist",
        );
        const topShows = await getTopItems(
          "https://api.spotify.com/v1/me/top/tracks?limit=10",
        );
        const playlists = await getTopItems(
          "https://api.spotify.com/v1/me/playlists?limit=10",
        );
        commit("SET_PROFILE", profile);
        commit("SET_TOP_SHOWS", topShows.items);
        commit("SET_PLAYLISTS", playlists.items);
        commit("SET_ARTISTS", artists.artists.items);
        commit("SET_LOADING", false);
      } catch (error) {
        console.error("Error fetching Profile:", error);
      }
    },
  },

  getters: {
    shows: (state) => state.shows,
    episodes: (state) => state.episodes,
    isLoading: (state) => state.loading,
    searchQuery: (state) => state.searchQuery,
    filteredShows: (state) => state.filteredShows,
    profile: (state) => state.profile,
    artists: (state) => state.artists,
    topShows: (state) => state.topShows,
    playlists: (state) => state.playlists,
  },
});
