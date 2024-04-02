import "./IsInStock.scss";

export default function IsInStock({ isInStock }) {

  if ((isInStock === true || isInStock === "In Stock")) {
    return (
      <div className="inStock">
        <p className="inStock-text">IN STOCK</p>
      </div>
    );
  }

  return (
    <div className="notInStock">
      <p className="notInStock-text">OUT OF STOCK</p>
    </div>
  );
}
