import React, { createContext, useContext, useState, useEffect } from "react";

// Creamos el contexto
const CartContext = createContext();

// Hook para consumir el contexto fácilmente
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Persiste carrito en localStorage
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Efecto para actualizar localStorage cuando cambia el carrito
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (producto) => {
    setCartItems((prev) => {
      const found = prev.find((item) => item.id === producto.id);
      if (found) {
        // Si ya está, suma cantidad
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        // Si no está, lo agrega con cantidad 1
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const removeFromCart = (idProducto) => {
    setCartItems((prev) => prev.filter((item) => item.id !== idProducto));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};