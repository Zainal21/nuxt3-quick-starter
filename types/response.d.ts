export interface ApiResponse<T> {
  message?: string;
  statusCode?: number;
  data: T;
}

export interface ApiErrorData {
  message: string;
  statusCode: number;
}

export interface ApiError {
  data: ApiErrorData | any;
  status: number;
  statusText: string;
}
