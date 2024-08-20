import { useLoaderData } from "react-router-dom";

const AuthorDetailsPage = () => {
  const { authorDetails }=useLoaderData()

  return (
    <main className="w-screen">
      <section className="w-full flex items-center bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-2 py-8 2xl:container mx-auto"><div className="flex justify-center">
          <img
            className="block h-96 w-60 object-cover shadow-lg shadow-gray-300"
            src={authorDetails.image}
            alt={authorDetails.name}
          />
        </div>
        <div className="flex flex-col items-center text-justify gap-2 lg:items-start lg:text-left p-2 text-white">
          <h1 className="text-xl font-semibold mb-2 capitalize">
            {authorDetails.name}
          </h1>
          <p>{authorDetails.about}</p>
        </div></div>
      </section>
    </main>
  );
};

export default AuthorDetailsPage;
