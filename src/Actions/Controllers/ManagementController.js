import { myrouter } from "../AxiosInitializer/initAxios";

export const AddTurf = async (data) => await myrouter.post("/turf", data);
export const getTurf = async () => await myrouter.get("/turf");
export const getAllUsers = async () => await myrouter.get("/turf/users");
export const getSlot = async (data) => await myrouter.post("/turf/avilabel-slot", data);
export const BookSlot = async (data) => await myrouter.post("/turf/book", data);
export const getBookings = async (data) => await myrouter.get("/turf/bookings");





