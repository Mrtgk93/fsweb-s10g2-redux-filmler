import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions";

export const initialState = {
  favorites: [],
  displayFavorites: true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FAVORITE:
      return {
        favorites: state.favorites.filter((fav) => action.payload !== fav.id),
      };
    case ADD_FAVORITE:
      let favMovie = {
        id: action.payload.id,
        title: action.payload.title,
      };
      return { ...state, favorites: [...state.favorites, favMovie] };
    case TOGGLE_FAVORITES:
      console.log("tıklandı");
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };

    default:
      return state;
  }
};
export default reducer;
