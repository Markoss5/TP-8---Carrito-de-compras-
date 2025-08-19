import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

function ProductoDetalle() {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${idProducto}`)
      .then(res => setProducto(res.data))
      .finally(() => setLoading(false));
  }, [idProducto]);

  if (loading) return <div className="loader">Cargando producto...</div>;
  if (!producto) return <div className="error">Producto no encontrado.</div>;

  return (
    <section className="product-detail">
      <div className="product-detail__imgbox">
        <img src={producto.image} alt={producto.title} className="product-detail__img" />
      </div>
      <div className="product-detail__info">
        <h2 className="product-detail__title">{producto.title}</h2>
        <p className="product-detail__category">Categoría: {producto.category}</p>
        <p className="product-detail__desc">{producto.description}</p>
        <p className="product-detail__price">${producto.price}</p>
        <button className="button-primary" onClick={() => addToCart(producto)}>Agregar al carrito</button>
        <Link to="/productos" className="product-detail__back">Volver a productos</Link>
      </div>
    </section>
  );
}

export default ProductoDetalle;