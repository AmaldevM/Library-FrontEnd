import axios from "axios";

export async function loader() {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/books`
  );
  const books = await response.data;
  return { books };
}
