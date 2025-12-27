import { useState } from "react";
import Button from "../../components/common/Button/Button";
import { createContactMessage } from "../../services/contactService";

const ContactPage = () => {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await createContactMessage(formData);
      setSubmitted(true);
      setFormData({ nombre: "", email: "", mensaje: "" });
    } catch (err) {
      setError("Hubo un problema al enviar el mensaje. Intenta nuevamente.");
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Contacto</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="form-control"
              rows="4"
              required
            ></textarea>
          </div>
          {error && <p className="text-danger">{error}</p>}
          <Button variant="success" className="btn-cta" type="submit">
            Enviar
          </Button>
        </form>
      ) : (
        <div className="alert alert-success text-center">
          ¡Gracias por tu mensaje! Te responderemos pronto.
        </div>
      )}
    </div>
  );
};

export default ContactPage;