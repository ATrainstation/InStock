import "./Button.scss";
import EditIcon from "/src/assets/icons/edit-24px-white.svg";

// Add onclick and pass in a specific function as a prop
export default function Button(prop) {
  const { buttonText, classname, link } = prop;

  return (
    <button className={`${classname} button`} onClick={link}>
      <img
        className={`${
          classname === "edit-button" ? "button__edit-icon" : "button__icon"
        }`}
        src={EditIcon}
        alt="button icon"
      />
      <p
        className={`${
          classname === "edit-button" ? "button__edit-text" : "button__text"
        }`}
      >
        {buttonText}
      </p>
    </button>
  );
}
