import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import MainLayout from './layouts/MainLayout.jsx';

import ProductoDetalle from "./pages/ProductoDetalle.jsx";
import Home from "./pages/Home.jsx";
import QuienesSomos from "./pages/QuienesSomos.jsx";
import Contacto from "./pages/Contacto.jsx";
import Productos from "./pages/Productos.jsx";
import CartWidget from "./components/CartWidget.jsx";

function App() {
  return (
    <BrowserRouter basename="/TP7_ProductosEFSI">
      <CartWidget />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />    
          <Route path="home" element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/:category" element={<Productos />} />
          <Route path="quienessomos" element={<QuienesSomos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="detalleProd/:idProducto" element={<ProductoDetalle />} />
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;