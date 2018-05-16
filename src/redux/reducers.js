import { combineReducers } from "redux";
import config from "./config/reducer";
import server from "./server/reducer";
import general from "./general/reducer";

export default rootReducer = combineReducers({
  config, 
  server,
  general,
});