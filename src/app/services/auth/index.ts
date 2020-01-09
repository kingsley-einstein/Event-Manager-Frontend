import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { AuthModel, APIResponse, APIRequest } from "../../api";

const { api } = environment;

@Injectable()
export class AuthService {
  constructor(private client: HttpClient) {}

  getLoggedUser() {
    return this.client.get<APIResponse<AuthModel>>(`${api}/auth-service/api/v1/auth`);
  }

  createUser(request: APIRequest<{ email: string; password: string; }>) {
    return this.client.post<
      APIResponse<{ id: string; email: string; token: string; }>
    >(`${api}/auth-service/api/v1/auth`, request.body);
  }

  login(request: APIRequest<{ email: string; password: string; }>) {
    return this.client.post<
      APIResponse<{ id: string; email: string; token: string; } | string>
    >(`${api}/auth-service/api/v1/auth/login`, request.body);
  }
  update(request: APIRequest<{ password: string; }>) {
    return this.client.patch<APIResponse<any>>(`${api}/auth-service/api/v1/auth/update`, request.body);
  }
  logout() {
    return this.client.post<APIResponse<any>>(`${api}/auth-service/api/v1/auth/logout`, {});
  }
}
