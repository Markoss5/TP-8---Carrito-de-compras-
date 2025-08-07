import { useEffect, useRef, useState } from "react";

const DESCUENTOS = [
  {
    id: 1,
    titulo: "¡20% OFF en Mochilas Deportivas!",
    texto: "Aprovecha el mejor precio del mes. Stock limitado.",
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    id: 2,
    titulo: "Descuento en Relojes Modernos",
    texto: "15% OFF en relojes de moda para todos los estilos.",
    img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  },
  {
    id: 3,
    titulo: "Gafas de Sol con 20% OFF",
    texto: "Protege tu vista y luce increíble este verano.",
    img: "https://fakestoreapi.com/img/71U7T1koLUL._AC_UL640_QL65_ML3_.jpg"
  }
];

function DescuentosCarousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % DESCUENTOS.length);
    }, 4500);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const goTo = (i) => setIndex(i);

  return (
    <div className="descuentos-carousel">
      {DESCUENTOS.map((item, i) => (
        <div
          className={`descuento-slide${i === index ? " active" : ""}`}
          key={item.id}
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="descuento-slide__overlay" />
          <div className="descuento-slide__content">
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
          </div>
        </div>
      ))}
      <div className="descuento-carousel__dots">
        {DESCUENTOS.map((_, i) => (
          <button
            key={i}
            className={`descuento-dot${i === index ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Ir al descuento ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default DescuentosCarousel;