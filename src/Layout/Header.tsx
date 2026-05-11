import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Link } from "react-router";
function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const searchItem = (e: React.KeyboardEvent) => {
    console.log("event fired", e.key);
    if (e.key === "Enter") {
      navigate(`/recipe_application/search/${search}`);
      setSearch("");
    }
  };
  return (
    <header className="flex justify-between items-center border-b-2 border-gray-300 px-4 py-6">
      <Link to="/recipe_application/home" className="font-bold text-4xl ">
        GUSTO
      </Link>
      <div className="flex gap-6 items-center">
        <NavLink
          to={"/recipe_application/home"}
          className={({ isActive }) =>
            isActive ? "text-black font-semibold" : "text-gray-400 text-sm"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/recipe_application/about"}
          className={({ isActive }) =>
            isActive ? "text-black font-semibold" : "text-gray-400 text-sm"
          }
        >
          About
        </NavLink>
        <input
          type="text"
          className="border border-gray-600 active:border-black rounded-md p-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchItem}
          placeholder=" Search..."
        />
      </div>
    </header>
  );
}

export default Header;
