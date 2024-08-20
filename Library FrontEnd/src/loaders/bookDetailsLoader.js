import axios from "axios";

export async function loader({ params }) {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/books/${params.bookId}`);
    const bookDetails = response.data
    return { bookDetails };
  }