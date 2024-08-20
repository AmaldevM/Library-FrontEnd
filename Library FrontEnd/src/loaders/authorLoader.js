import axios from "axios";

export async function loader() {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/authors`);
    const authors = await response.data;
    return { authors };
  }