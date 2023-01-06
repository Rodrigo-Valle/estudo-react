import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
      //  className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')} não é mais necessario fazer dessa forma, ja é automatico
      >Home
      </NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default Navbar;