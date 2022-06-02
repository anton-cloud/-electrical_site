import { NavLink } from "react-router-dom";
import styles from "./Naviagation.modules.css";

const Navigation = ({ isDesktop }) => {
  return (
    <nav>
      <ul className="navList list">
        <li className="navListItem">
          <NavLink className="link" to="/services">
            Послуги
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink className="link" to="/galary">
            Галерея
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink className="link" to="/about">
            Про нас
          </NavLink>
        </li>
        {!isDesktop && (
          <li className="navListItem">
            <NavLink className="link" to="/about">
              Оформити заявку
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
