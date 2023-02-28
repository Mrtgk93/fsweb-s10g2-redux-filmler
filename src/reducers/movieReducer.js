import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "../data.js";

export const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    case ADD_MOVIE:
      let filmEkle = action.payload;
      filmEkle = { ...filmEkle, id: Date.now() };
      const newFilm = [...state.movies, filmEkle];
      return {
        ...state,
        movies: newFilm,
      };
    default:
      return state;
  }
};

export default reducer;
