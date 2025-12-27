import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useCart } from "../../../hooks/useCart";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const ItemDetail = ({ product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem({ ...product, quantity: qty });
    setAdded(true);
  };

  return (
    <div className="item-detail-container">
      <div className="row">
        <div className="col-md-5">
          {product.image && (
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid product-image"
            />
          )}
        </div>
        <div className="col-md-7">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <p>{product.description}</p>
          <h4 className="mb-3">Precio: ${product.price}</h4>

          {!added ? (
            <ItemCount onAdd={handleAdd} stock={product.stock ?? 20} />
          ) : (
            <div className="d-flex justify-content-center gap-3 mt-3">
              <NavLink to="/cart">
                <Button variant="success" className="btn-cta">
                  Ir al carrito
                </Button>
              </NavLink>
              <NavLink to="/">
                <Button variant="warning" className="btn-cta">
                  <i className="bi bi-arrow-left-circle"></i> Seguir comprando
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;