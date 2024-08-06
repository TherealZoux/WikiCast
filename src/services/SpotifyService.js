import axios from "axios";
import store from "@/store";
import { getRefreshToken } from "./AuthService.js";

const accessToken = localStorage.getItem("access_token");

export async function fetchcasts() {
  const url = "https://api.spotify.com/v1/shows"; // Spotify API endpoint for shows
  const showIds = `
5c6F2dkYH5T9MWA77W1Fe1,
6sTl0ndvk5HRSLalsNtybj,
5og74haQRULrM4UqbS8lMB,
06NRDgYUgY0g3buUz2uYqt,
5YgAoZ73AgI7etPhqmHg63,
5y7hBNPq9kHLrPjhbiSHXc,
20fIEuFmkKx1fI2ShEBm3D,
4SKOTItEKyjrR5QP2TPOXY,
1DNEj630rim6ZNU90v1TYj,
5KQaalhG5C5vG85P13wGQd,
1q6P9hkN9wRM45lyAJWEvN,
76esZhlGdSDNck2yFM35JF,
2HOihpetR3Fj3agsxhlWv9,
4sKfeJ2gWjFrTuKWIz2VVe,
4E5sExxn1PEvqJdMWmIGW3,
1th2A68uXkIcHZej7YLMv6,
1PFrNV9rldXOQzveGNm7Ll,
7qJ8BXDpiJBmYBpQXAeFmF,
3w3qmQgLZSEtE4Qew9W5oX,
4d0nVaVENSDacGg8CSB3oO,
4exVan3GUIuCRlzbxwtG1Q,
7swxkecczFgxFuovnXIp5J,
7o0MSC2dd94Cj21R6WCafa,
2Fo0jR0jf6E6PdEMCJTIMU,
1OUqDEV1Yw9xQY2YET1opb,
32Za3jmqvPXx9PwXnMrlsU,
69Y9V268b61lhMNSFyzC42,
2KJgeJQvX45LVFBxIDGeuI,
4QNgSGdfXHYRUZnvu03GQZ,
1Vd8W8Gu7VGWNtYmN3pnou,
6G8gqVH6dW3fkMlFmuMEoR,
3w3qmQgLZSEtE4Qew9W5oX,
4SEZywCqLqOInZtVy2kqHY,
16dTDyMqNPm1v7MT17ye9a,
01zx6sfLpseEACwHIIn50r,
1RssR31KWn2QaGdkiN7AlS,
37jmRgRugi4dd0LEdQ4EOe,
1BXjXjq5nn1SGlU23i6wf3,
2jW95tmkdQOVUzOxYwKxJy,
2iiHKKnNrzQxkF3sh3WePN,
6IXZkeqbW3PfNk4KGn9DJf,
0ujB45WsIYAgbOaRnZR36z,
5fMd1o0LfSwnM9r9puSxWn,
0t8gUtRUshxnUvVfQQE700,
2sdZ4vzSWCmELvKYe9VBob,
0ME9MiP1DZPKk6D6DmSPAv
`;
  try {
    const response = await axios.get(`${url}?ids=${showIds}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
    return response.data.shows;
  } catch (error) {
    console.error("Error fetching podcasts:", error);
    getRefreshToken();

  }
}

export const fetchEpisodes = async (showId) => {
  const Id = showId;
  const url = `https://api.spotify.com/v1/shows/${Id}/episodes`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching episodes", error);
    if (localStorage.getItem("refresh_token") !== undefined) {
      getRefreshToken();
    } else {
      localStorage.clear();
    }
  }
};

export const fetchProfile = async () => {
  const url = "https://api.spotify.com/v1/me";
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    return response.data;
  } catch (error) {
    getRefreshToken();
  }
};
export const getTopItems = async (endPoint) => {
  const url = endPoint;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    return response.data;
  } catch (error) {
    getRefreshToken();

  }
};
