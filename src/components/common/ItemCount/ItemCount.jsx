import { useState } from "react";
import "./ItemCount.css";
import Button from "../Button/Button";

const ItemCount = ({ initial = 1, stock = 20, onAdd }) => {
  const [count, setCount] = useState(initial); 
  const [added, setAdded] = useState(false); 

  const inc = () => setCount((c) => Math.min(c + 1, stock));
  const dec = () => setCount((c) => Math.max(c - 1, 1));

  const handleAdd = () => {
    if (onAdd) {
      onAdd(count); 
      setAdded(true); 
    }
  };

  if (added) {
    return (
      <p className="text-success fw-bold">
        Producto agregado al carrito ✅
      </p>
    );
  }

  return (
    <div className="d-flex align-items-center gap-2">
      <button
        className="btn btn-outline-secondary"
        onClick={dec}
        disabled={count <= 1}
      >
        -
      </button>
      <span className="fw-bold">{count}</span>
      <button
        className="btn btn-outline-secondary"
        onClick={inc}
        disabled={count >= stock}
      >
        +
      </button>
      <Button variant="success" onClick={handleAdd}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;