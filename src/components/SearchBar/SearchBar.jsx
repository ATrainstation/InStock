import "./SearchBar.scss";

export default function SearchBar(prop) {
  const { placeholder, classname, searchwidth} = prop;

  return <input style={{ width: searchwidth }} className={`${classname} default`} type="text" placeholder={placeholder}/>;
}
