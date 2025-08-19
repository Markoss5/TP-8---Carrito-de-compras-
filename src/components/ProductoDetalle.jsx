import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";

const ProductoDetalle = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    axios.get(`https://tuapi.com/productos/${id}`)
      .then(res => setProducto(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!producto) return <div>Cargando...</div>;

  return (
    <div className="producto-detalle">
      <img src={producto.imagen} alt={producto.nombre} className="detalle-img" />
      <h2>{producto.nombre}</h2>
      <p className="detalle-desc">{producto.descripcion}</p>
      <p className="detalle-price">${producto.precio}</p>
      <button
        className="add-cart-btn"
        onClick={() => addToCart(producto)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductoDetalle;