export interface APIResponse<T> {
  statusCode: number;
  body: T;
}
