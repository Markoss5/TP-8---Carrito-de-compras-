import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CardProducto = ({ producto }) => {
  const { addToCart } = useCart();

  // Compatibilidad con API fakestore (title/price/image) y con estructura local (nombre/precio/imagen)
  const nombre = producto.nombre ?? producto.title;
  const precio = producto.precio ?? producto.price;
  const imagen = producto.imagen ?? producto.image;

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img src={imagen} alt={nombre} className="product-card__image" />
      </div>
      <div className="product-card__info">
        <h3 className="product-card__title">{nombre}</h3>
        <p className="product-card__price">${precio}</p>
        <div style={{ display: "flex", gap: ".6rem", justifyContent: "center", marginTop: ".8rem" }}>
          <button className="button-primary" onClick={() => addToCart(producto)}>Agregar al carrito</button>
          <Link to={`/producto/${producto.id}`} className="apple-cta">Ver detalle</Link>
        </div>
      </div>
    </div>
  );
};

export default CardProducto;