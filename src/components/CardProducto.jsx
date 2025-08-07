import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CardProducto({ producto }) {
  const { addToCart } = useCart();

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
      <button
        className="product-card__add-btn"
        onClick={() =>
          addToCart({
            id: producto.id,
            nombre: producto.title, // O usa "title" si tu contexto espera ese campo
            precio: producto.price, // O usa "price" si tu contexto espera ese campo
            image: producto.image,
          })
        }
        style={{ marginTop: "10px", width: "100%" }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default CardProducto;