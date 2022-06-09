import { NavLink } from "react-router-dom";
import { NavigationStyled } from "./NavigationStyled";

const Navigation = ({ isDesktop }) => {
  return (
    <NavigationStyled>
      <ul className="navList list">
        <li className="navListItem">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
            exact="true"
          >
            Послуги
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
            to="/galary"
          >
            Галерея
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
            to="/about"
          >
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
    </NavigationStyled>
  );
};

export default Navigation;
