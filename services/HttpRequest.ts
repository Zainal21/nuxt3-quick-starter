import axios from "axios";
import type { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { BASE_API_URL } from "~/constants";

export class HttpRequest {
  static async send(
    method: string,
    url: string,
    data?: Record<string, any>,
    extraHeaders?: Record<string, any>,
    extraConfig?: Partial<AxiosRequestConfig>
  ) {
    let headers: Partial<AxiosRequestHeaders> = {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    headers = { ...headers, ...extraHeaders };

    if (["/api/login"].includes(url)) {
      delete headers.Authorization;
    } else {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    const requestOptions: AxiosRequestConfig = {
      baseURL: BASE_API_URL,
      url,
      data,
      method,
      headers: headers as AxiosRequestHeaders,
      ...extraConfig,
    };

    return axios(requestOptions);
  }
}
