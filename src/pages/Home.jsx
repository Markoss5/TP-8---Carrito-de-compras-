import videoLanding from '../assets/Videos/VideoLanding.mp4';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="apple-home">
      <section className="apple-hero hero-landing">
        <div className="hero-overlay" />
        <video
          className="hero-video"
          src={videoLanding}
          autoPlay
          loop
          muted
          playsInline
        >
          Tu navegador no soporta el video.
        </video>
        <div className="hero-content">
          <h1 className="hero-title">¡Bienvenido a MarcoShops!</h1>
          <p className="hero-desc">
            Descubrí la experiencia definitiva en compras online.<br />
            Productos seleccionados, empaque profesional y entrega garantizada.<br />
            <b>Optimizá tu negocio o tu hogar con la mejor atención personalizada y el respaldo de un equipo apasionado por la excelencia.</b>
          </p>
        </div>
      </section>

        <section className="apple-featured" id="destacados">
        <div className="apple-featured__grid">
          <div className="apple-feature-card">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Mochila" />
            <h2>Mochila de Aventura</h2>
            <p>Ideal para viajes, resistente y cómoda para todo tipo de actividades.</p>
            <a className="apple-link" href="#">Saber más</a>
          </div>
        </div>
      </section>

      <section className="apple-calltoaction">
        <h2>¿Listo para descubrir más?</h2>
        <Link className="button-primary" to="/productos">Ver Productos</Link>
      </section>
    </div>
  );
}

export default Home;