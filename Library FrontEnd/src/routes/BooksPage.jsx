import BookCard from "../componenets/BookCard";
import { useLoaderData } from "react-router-dom";


function BooksPage() {
  const { books } = useLoaderData();
  return (
    <main className="2xl:container mx-auto p-6">
      <h1 className="text-3xl font-bold ">Books</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6">
        {books.map((book) => (
          <BookCard
            key={book._id}
            id={book._id}
            title={book.name}
            author={book.author}
            image={book.image}
          />
        ))}
      </div>
    </main>
  );
}
export default BooksPage;
