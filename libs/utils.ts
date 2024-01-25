import type { AxiosError, AxiosResponse } from "axios";
import { type ClassValue, clsx } from "clsx";
import type { ApiError, ApiErrorData, ApiResponse } from "~/types/response";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const transformError = <T>(
  error: AxiosError<ApiError> | any
): ApiErrorData => {
  if (error.response && error.response.data && error.response.data.data) {
    return error.response.data.data;
  } else if (error.status != 200) {
    return { message: error?.data.message, statusCode: 400 };
  } else if (error.request) {
    return { message: "No response received from the server", statusCode: 500 };
  } else {
    return { message: error.message, statusCode: 500 };
  }
};

export const transformSuccess = <T>(
  response: AxiosResponse<ApiResponse<T>> | any
): any => {
  return { message: "success", statusCode: 200, data: response.data };
};
