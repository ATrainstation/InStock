import logoImg from "/src/assets/logo/InStock-Logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <Link to={"/"} className="header__image-wrapper">
          <img src={logoImg} className="header__image" alt="logo" />
        </Link>
        <div className="header__btn-wrapper">
          <Link
            to={"/"}
            className={
              location.pathname === "/" || location.pathname.includes("warehouse") && !location.pathname.includes("/inventory")
                ? "header__btn--selected"
                : "header__btn"
            }
            
          >
            Warehouses
          </Link>
          <Link
            to={"/inventory"}
            className={
              location.pathname.includes("/inventory")
                ? "header__btn--selected"
                : "header__btn"
            }
          >
            Inventory
          </Link>
        </div>
      </div>
    </header>
  );
}
