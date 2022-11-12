import apiRest from "../AxiosInstance";

export const getDataTable = (page: number | null) => {
  let params = page ? '?page=' + page : '';
  return apiRest.get(`/api/users${params}`,{
    headers:{

    }
  })
}