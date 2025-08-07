import { useState } from "react";
import { Link } from 'react-router-dom';

function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact">
      <h2 className="contact__title">Contacto</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <input
          className="contact__input"
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          className="contact__input"
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="contact__textarea"
          name="mensaje"
          placeholder="Mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
        />
        <button className="contact__btn" type="submit">Enviar</button>
        {submitted && <div className="contact__thanks">¡Gracias por contactarnos!</div>}
      </form>
    </section>
  );
}

export default Contacto;