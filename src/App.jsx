import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import MainLayout from './layouts/MainLayout.jsx';

import ProductoDetalle from "./pages/ProductoDetalle.jsx";
import Home from "./pages/Home.jsx";
import QuienesSomos from "./pages/QuienesSomos.jsx";
import Contacto from "./pages/Contacto.jsx";
import Productos from "./pages/Productos.jsx";
import CartWidget from "./components/CartWidget.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CartWidget />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />    
          <Route path="home" element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/:idCategoria" element={<Productos />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="producto/:idProducto" element={<ProductoDetalle />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;