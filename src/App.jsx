import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import MainLayout from './layouts/MainLayout.jsx';

import DetalleProd from "./pages/DetalleProd.jsx";
import Home from "./pages/Home.jsx";
import QuienesSomos from "./pages/QuienesSomos.jsx";
import Contacto from "./pages/Contacto.jsx";
import Productos from "./pages/Productos.jsx";

function App() {
  return (
    <BrowserRouter basename="/TP7_ProductosEFSI">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />    
          <Route path="home" element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/:category" element={<Productos />} />
          <Route path="quienessomos" element={<QuienesSomos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="detalleProd/:id" element={<DetalleProd />} />
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;