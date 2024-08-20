import axios from "axios";

export async function loader() {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/books/featured`)
    const featuredBooks = await response.data
    console.log(featuredBooks)
    return { featuredBooks }
}