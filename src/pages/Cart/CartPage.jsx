import { useCart } from "../../hooks/useCart";
import Button from "../../components/common/Button/Button";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-5">
        <h2>Carrito</h2>
        <p>Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">Carrito</h2>
      <ul className="list-group mb-3">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{item.title}</strong> <br />
              Precio: ${item.price} <br />
              Cantidad: {item.quantity} <br />
              Subtotal: ${item.price * item.quantity}
            </div>
            <Button variant="danger" onClick={() => removeItem(item.id)}>
              Quitar
            </Button>
          </li>
        ))}
      </ul>

      <h4 className="mb-3">Total: ${totalPrice}</h4>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <Button variant="danger" className="btn-cta" onClick={clearCart}>
          Vaciar carrito
        </Button>

        <NavLink to="/checkout">
          <Button variant="success" className="btn-cta">Finalizar compra</Button>
        </NavLink>

        {/* Nuevo botón Seguir comprando */}
        <NavLink to="/">
          <Button variant="warning" className="btn-cta">
            <i className="bi bi-arrow-left-circle"></i> Seguir comprando
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default CartPage;