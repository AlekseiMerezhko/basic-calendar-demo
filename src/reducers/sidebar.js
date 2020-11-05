import { SWITCH_SIDEBAR } from "actions/sidebarActions";
const defaultState = { isSidebarOpen: true };

export const sidebarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SWITCH_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    default:
      return state;
  }
};
