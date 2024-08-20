import { useNavigate } from "react-router-dom";

function BookCard({ id, image, title, author }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/books/${id}`);
  }
  return (
    <article
      className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center hover:cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      onClick={handleClick}
    >
      <img
        src={image}
        alt={title}
        className="w-32 h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-semibold mb-2 capitalize">{title}</h2>
      <span className="text-gray-600">{author}</span>
    </article>
  );
}

export default BookCard;
