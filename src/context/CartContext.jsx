import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addItem = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        // Si ya existe, sumamos la cantidad
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      // Si no existe, lo agregamos
      return [...prev, item];
    });
  };

  // Quitar producto por id
  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Total de unidades
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Total de precio
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook para consumir el contexto
export const useCartContext = () => useContext(CartContext);