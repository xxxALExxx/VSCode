import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_APP_APT_BACKEND ?? 'http://localhost:3333',
}); 