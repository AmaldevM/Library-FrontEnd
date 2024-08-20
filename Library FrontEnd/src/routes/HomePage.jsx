import { useLoaderData } from "react-router-dom";
import BookCard from "../componenets/BookCard";
function HomePage() {
  const {featuredBooks}=useLoaderData()
  return (
    <main className="2xl:container mx-auto p-6">
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Discover a World of Books</h2>
        <p className="text-lg">
          Dive into a world of endless possibilities with Libraria, your ultimate destination for discovering and exploring a vast collection of books. Whether you're a book lover, a casual reader, or someone looking to embark on new literary adventures, Libraria has something for everyone. Browse through our extensive library, find your next favorite book, and immerse yourself in the captivating stories that await you. Happy reading!
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            featuredBooks.map((book)=><BookCard key={book._id} id={book._id} title={book.title} author={book.author} image={book.image}/>)
          }
        </div>
      </section>
      {/* {
        login===false?<CallToAction/>:null
      } */}
  </main>
  )
}
export default HomePage;
