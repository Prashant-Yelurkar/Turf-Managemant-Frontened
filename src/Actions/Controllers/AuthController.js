import { myrouter } from "../AxiosInitializer/initAxios";

export const login = async (data) => await myrouter.post("/auth/login", data);





