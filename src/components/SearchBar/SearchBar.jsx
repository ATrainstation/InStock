import "./SearchBar.scss";

export default function SearchBar(prop) {
  const { placeholder, classname } = prop;

  return (
    <input
      className={`${classname} default`}
      type="text"
      placeholder={placeholder}
    />
  );
}
