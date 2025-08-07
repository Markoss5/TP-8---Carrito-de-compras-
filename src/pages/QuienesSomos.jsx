import { Link } from 'react-router-dom';

function QuienesSomos() {
  return (
    <div className="apple-aboutpage">
      <section className="apple-about__hero">
        <div className="apple-about__hero-center">
          <h1 className="apple-about__title">Sobre Nosotros</h1>
          <p className="apple-about__subtitle">
            Inspirados por la variedad y accesibilidad.
          </p>
        </div>
      </section>

      <section className="apple-about__content">
        <div className="apple-about__imgbox">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/662/330/original/store-icon-logo-illustration-vector.jpg"
          />
        </div>
        <div className="apple-about__text">
          <h2>Nuestra misión</h2>
          <p>
            En <b>MarcoShops</b>, buscamos acercar productos de calidad a todos, con confianza y buen precio.
            Desde nuestros inicios, nos propusimos ofrecer experiencias de compra sencillas y satisfactorias.
          </p>
          <h2>Nuestros valores</h2>
          <ul>
            <li>Variedad de productos</li>
            <li>Atención al cliente</li>
            <li>Precios accesibles</li>
            <li>Compromiso con la satisfacción</li>
          </ul>
          <p>
            Nuestro equipo está formado por personas apasionadas que buscan facilitar tu experiencia de compra.
          </p>
        </div>
      </section>

      <section className="apple-about__footercta">
        <h2>¿Quieres formar parte de nuestra historia?</h2>
        <Link className="button-primary" to="/contacto">Contactanos</Link>
      </section>
    </div>
  );
}

export default QuienesSomos;