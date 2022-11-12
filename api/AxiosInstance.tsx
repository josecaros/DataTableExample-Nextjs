import axios, { AxiosRequestConfig } from "axios";
const apiRest = axios.create({
  baseURL: "https://reqres.in",
})
export default apiRest;