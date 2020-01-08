import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { APIRequest, APIResponse, EventModel } from "../../api";

const { api } = environment;

@Injectable()
export class EventService {
  constructor(private client: HttpClient) {}

  createEvent(request: APIRequest<{ title: string; venue: string; startTime: Date; concludingTime: Date; }>) {
    return this.client.post<APIResponse<EventModel>>(`${api}/event-service/api/v1/event`, request.body);
  }
}
