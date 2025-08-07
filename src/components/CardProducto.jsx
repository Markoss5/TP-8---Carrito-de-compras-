import { Link } from "react-router-dom";

function CardProducto({ producto }) {
  return (
    <div className="product-card">
      <Link to={`/producto/${producto.id}`}>
        <div className="product-card__image-wrapper">
          <img src={producto.image} alt={producto.title} className="product-card__image" />
        </div>
        <div className="product-card__info">
          <h3 className="product-card__title">{producto.title}</h3>
          <p className="product-card__price">${producto.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default CardProducto;