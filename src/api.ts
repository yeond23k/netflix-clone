const API_KEY = "5550e924d8b27fb43cb4c991656779d5";
const BASE_PATH = "https://api.themoviedb.org/3";

export const getMovies = () => {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
};
