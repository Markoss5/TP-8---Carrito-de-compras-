import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardProducto from "../components/CardProducto";

function Productos() {
  const { idCategoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = "https://fakestoreapi.com/products";
    if (idCategoria) url = `https://fakestoreapi.com/products/category/${idCategoria}`;
    axios.get(url)
      .then(res => setProductos(res.data))
      .finally(() => setLoading(false));
  }, [idCategoria]);

  return (
    <section className="products">
      <h2 className="products__title">
        {idCategoria ? `Productos / ${idCategoria.charAt(0).toUpperCase() + idCategoria.slice(1)}` : "Todos los productos"}
      </h2>
      {loading ? (
        <div className="loader">Cargando productos...</div>
      ) : (
        <div className="products__grid">
          {productos.map(producto => (
            <CardProducto key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Productos;