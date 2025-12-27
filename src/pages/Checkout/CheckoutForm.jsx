import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import Button from "../../components/common/Button/Button";
import { createOrder } from "../../services/orderService";
import { NavLink } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, clearCart, totalPrice } = useCart();

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const orderData = {
      buyer,
      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalPrice,
    };

    try {
      const id = await createOrder(orderData);
      setOrderId(id);
      clearCart();
    } catch (err) {
      setError("Hubo un problema al generar la orden. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="text-center py-5">
        <h2>¡Gracias por tu compra!</h2>
        <p>
          Tu número de orden es: <strong>{orderId}</strong>
        </p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">Finalizar compra</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="name"
            value={buyer.name}
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
            value={buyer.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="text"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        {error && <p className="text-danger">{error}</p>}

        {/* Botón principal */}
        <div className="text-center mt-4">
          <Button variant="success" type="submit" disabled={loading} className="btn-cta">
            {loading ? "Procesando..." : "Confirmar compra"}
          </Button>
        </div>
      </form>

      {/* Botones secundarios */}
      <div className="d-flex flex-column align-items-center gap-3 mt-4">
        <NavLink to="/cart">
          <Button variant="danger" className="btn-cta">
            <i className="bi bi-cart"></i> Volver al carrito
          </Button>
        </NavLink>

        <NavLink to="/">
          <Button variant="warning" className="btn-cta">
            <i className="bi bi-arrow-left-circle"></i> Seguir comprando
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default CheckoutForm;