import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function PrimaryHeader() {
  const login = useSelector((state) => state.login.loggedIn);
  return (
    <header className="shadow-lg shadow-gray-200">
      <nav className="2xl:container mx-auto px-6 py-6 flex flex-row justify-between items-center">
        <Link to={"/"}>
          <span className="text-3xl font-extrabold">Libraria</span>
        </Link>
        <ul className="flex flex-row gap-x-4 capitalize text-lg">
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/books"}>books</Link>
          </li>
          <li>
            <Link to={"/authors"}>author</Link>
          </li>
          {login ? (
            <li>
              <Link to={"/logout"}>Log Out</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/Signup"}>Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default PrimaryHeader;
