import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favReducer from "./favReducer";

const rootReducer = combineReducers({
  movieReducer,
  favReducer,
});
export default rootReducer;
