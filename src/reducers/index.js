import { combineReducers } from "redux";
import { eventsReducer } from "./events";
import { sidebarReducer } from "./sidebar";
export default combineReducers({
  events: eventsReducer,
  sidebar: sidebarReducer,
});
