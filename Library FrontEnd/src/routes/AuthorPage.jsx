import AuthorCard from "../componenets/AuthorCard";
import { useLoaderData } from "react-router-dom";


function AuthorPage() {
  const { authors } = useLoaderData();
  return (
    <main className="2xl:container mx-auto p-6">
      <h1 className="text-3xl font-bold ">Authors</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6">
        {authors.map((author) => (
          <AuthorCard
            key={author._id}
            id={author._id}
            title={author.name}
            image={author.image}
          />
        ))}
      </div>
    </main>
  );
}
export default AuthorPage;
