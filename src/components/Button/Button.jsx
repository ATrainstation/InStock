import "./Button.scss";
import EditIcon from "/src/assets/icons/edit-24px-white.svg";

// Add onclick and pass in a specific function as a prop
export default function Button(prop) {
  const { buttonText, classname } = prop;

  return (
    <button className={`${classname} button`}>
      <img
        className={`${
          classname === "edit-button" ? "button__icon-edit" : "button__icon"
        }`}
        src={EditIcon}
        alt="button icon"
      />
      <p
        className={`${
          classname === "edit-button" ? "button__icon-text" : "button__text"
        }`}
      >
        {buttonText}
      </p>
    </button>
  );
}
