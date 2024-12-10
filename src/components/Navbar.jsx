import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to={"/"}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white font-bold shadow-md"
      >
        <p className="blue-gradient_text">OB</p>
      </NavLink>
      <nav className="flex gap-7 text-lg font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}
        >
          אודות
        </NavLink>
        <NavLink
          to="/Projects"
          className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}
        >
          פרויקטים
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
