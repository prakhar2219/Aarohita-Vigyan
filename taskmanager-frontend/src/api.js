import axios from "axios";

const API = axios.create({ baseURL: "https://aarohita-vigyan.onrender.com/api" });

export const getTasks = () => API.get("/");
export const addTask = (title) => API.post("/", { title });
export const toggleTask = (id) => API.patch(`${id}/toggle/`);
export const deleteTask = (id) => API.delete(`${id}/`);
