import axios from "axios";

const api = axios.create({
    baseURL: "http://viacep.com.br/ws/",
})

export default api

// export default class AxiosClient {
//     private static axiosClient: AxiosInstance;
  
//     constructor() {
//       if (AxiosClient.axiosClient == null) {
//         AxiosClient.axiosClient = axios.create({
//           baseURL: "http://viacep.com.br/ws/",
//         });
//       }
//     }
// }