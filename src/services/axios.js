import axios from "axios";

const API_URL = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});


export const MEDIA_URL = import.meta.env.VITE_MEDIA_URL;

export default API_URL;