import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favReducer from "./favReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  fav: favReducer,
});
export default movieReducer;
