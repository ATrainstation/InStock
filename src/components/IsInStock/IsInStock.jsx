import "./IsInStock.scss";

export default function IsInStock({ isInStock }) {

  if ((isInStock === true)) {
    return (
      <span className="inStock">
        <p className="inStock-text">IN STOCK</p>
      </span>
    );
  }

  return (
    <span className="notInStock">
      <p className="notInStock-text">OUT OF STOCK</p>
    </span>
  );
}
