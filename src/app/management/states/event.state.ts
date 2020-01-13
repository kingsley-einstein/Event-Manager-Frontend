import { EventModel } from "../../api";

export interface EventState {
  event: EventModel;
  events: EventModel[];
  error?: string;
}

export const initialEventState: EventState = {
  event: null,
  events: [],
};
