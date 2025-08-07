import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import QuienesSomos from "../pages/QuienesSomos";
import Productos from "../pages/Productos";
import ProductoDetalle from "../pages/ProductoDetalle";
import Contacto from "../pages/Contacto";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:idCategoria" element={<Productos />} />
          <Route path="/producto/:idProducto" element={<ProductoDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;