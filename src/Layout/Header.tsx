import { NavLink } from "react-router";
import { Link } from "react-router";
function Header() {
  return (
    <header className="flex justify-between items-center border-b-2 border-gray-300 px-4 py-6">
      <Link to="/" className="font-bold text-4xl ">
        GUSTO
      </Link>
      <div className="flex gap-6">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-black font-semibold" : "text-gray-400"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-black font-semibold" : "text-gray-400"
          }
        >
          About
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
