import { useCart } from "../../hooks/useCart";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <div className="cart-widget">
      🛒 <span className="badge bg-light text-dark">{totalItems}</span>
    </div>
  );
};

export default CartWidget;