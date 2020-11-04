import { mockedData } from "utils/mockedData";
import { SWITCH_TREE } from "actions/eventsActions";
const defaultState = { events: mockedData };

export const eventsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SWITCH_TREE:
      return {
        ...state,
        events: action.payload.events,
      };
    default:
      return state;
  }
};
