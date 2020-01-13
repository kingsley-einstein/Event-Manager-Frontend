import { EventActionType, EventConstants } from "../actions";
import { EventState, initialEventState } from "../states";

export default (state: EventState = initialEventState, action: EventActionType): EventState => {
  switch (action.type) {
    case EventConstants.GET_EVENT_SUCCESS:
      return { ...state, event: action.payload };
    case EventConstants.GET_EVENTS_SUCCESS:
      return { ...state, events: action.payload };
    case EventConstants.GET_EVENT_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
