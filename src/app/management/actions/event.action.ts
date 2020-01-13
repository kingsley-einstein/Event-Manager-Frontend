import { Action } from "@ngrx/store";
import { EventModel } from "../../api";

export enum EventConstants {
  GET_EVENT = "{Event} Ping to load an event",
  GET_EVENT_SUCCESS = "{Event} Got event successfully",
  GET_EVENTS = "{Event[]} Ping to load multiple events",
  GET_EVENTS_SUCCESS = "{Event[]} Successfully loaded events",
  GET_EVENT_FAILURE = "{Event} Failed in loading an event or multiple events"
}

export class GetEvent implements Action {
  public readonly type = EventConstants.GET_EVENT;
  constructor(public id: string) {}
}

export class GetEvents implements Action {
  public readonly type = EventConstants.GET_EVENTS;
  constructor(public page: number) {}
}

export class GetEventSuccess implements Action {
  public readonly type = EventConstants.GET_EVENT_SUCCESS;
  constructor(public payload: EventModel) {}
}

export class GetEventsSuccess implements Action {
  public readonly type = EventConstants.GET_EVENTS_SUCCESS;
  constructor(public payload: EventModel[]) {}
}

export class GetEventFailure implements Action {
  public readonly type = EventConstants.GET_EVENT_FAILURE;
  constructor(public payload: string) {}
}

export type EventActionType = GetEvent | GetEvents | GetEventSuccess | GetEventsSuccess | GetEventFailure;
