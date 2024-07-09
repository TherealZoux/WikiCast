
import axios from "axios";
import store from "@/store";

const accessToken = localStorage.getItem("access_token");

export async function fetchcasts() {
  const url = "https://api.spotify.com/v1/shows"; // Spotify API endpoint for shows
  const showIds = `4YpCiR9wNuUBZIDckvdhR1,5og74haQRULrM4UqbS8lMB,06NRDgYUgY0g3buUz2uYqt,5y7hBNPq9kHLrPjhbiSHXc,0MzqM3NmnypdG6fTBgHZc7,63J9PPOvYgTGJ1rTEI3fFO,20fIEuFmkKx1fI2ShEBm3D,2il7PJsug58z1ujFcCeZpT,1VRle3BeGZaekjIIw01b8O,0Gt5FBHlhPbEZM9i3kOptW,5IprtuKZpQjF9ytufXZhsr,5YgAoZ73AgI7etPhqmHg63,2HOihpetR3Fj3agsxhlWv9,6sTl0ndvk5HRSLalsNtybj,1DNEj630rim6ZNU90v1TYj,4SKOTItEKyjrR5QP2TPOXY,2g0OvGnIstbw6DC2dD73Hk,0wdgE4nnhQXwxajWcIpLIh,674GCeEjcdFYdGXK480shs,3IcdGHrnuF12CTGj9YqYJM,2qHBrpsX5be6hECXA5frmT`;
  try {
    const response = await axios.get(`${url}?ids=${showIds}`, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    return response.data.shows;
  } catch (error) {
    console.error("Error fetching podcasts:", error);
  }
}

export const userProfile = async () => {
  const url = "https://api.spotify.com/v1/me";
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    store.state.profile = response.data;
  } catch (error) {

  }
}

export const fetchEpisodes = async (showId) => {
  const Id = showId;
  const url = `https://api.spotify.com/v1/shows/${Id}/episodes`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching episodes", error);
  }
}

