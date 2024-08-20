import { useNavigate } from 'react-router-dom';

const AuthorCard = ({ id, image, title }) => {
    const navigate = useNavigate()
    function handleClick() {
        console.log(`Navigating to /authors/${id}`); // Check the id here
    navigate(`/authors/${id}`);
    }
  return (
    <article className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center hover:cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg" onClick={handleClick}>
      <img className="w-32 h-48 object-cover mb-4 rounded" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </article>
  );
};

export default AuthorCard;
