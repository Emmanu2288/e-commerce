import { useState } from 'react';
import "./ItemCount.css";
import Button from '../Button/Button';


const ItemCount = ({ initial = 1, stock = 20, onAdd }) => {
  const [count, setCount] = useState(initial);

  const inc = () => setCount(c => Math.min(c + 1, stock));
  const dec = () => setCount(c => Math.max(c - 1, 1));

  return (
    <div className="d-flex align-items-center gap-2">
      <button className="btn btn-outline-secondary" onClick={dec} disabled={count <= 1}>-</button>
      <span className="fw-bold">{count}</span>
      <button className="btn btn-outline-secondary" onClick={inc} disabled={count >= stock}>+</button>
      <Button variant="success" onClick={() => onAdd?.(count)}>Agregar al carrito</Button>
    </div>
  );
};
export default ItemCount;