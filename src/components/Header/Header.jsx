import logoImg from "/src/assets/logo/InStock-Logo.svg";
import "./Header.scss";


export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__image-wrapper">
          <img src={logoImg} className="header__image" alt="logo" />
        </div>
        <div className="header__btn-wrapper">
          <button className="header__btn--selected">Warehouses</button>
          <button className="header__btn">Inventory</button>
        </div>
      </div>
    </header>
  );
}
