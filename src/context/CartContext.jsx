import React, { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {

    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (producto) => {
    const normalizedProduct = {
      id: producto.id,
      nombre: producto.nombre ?? producto.title ?? "Producto",
      precio: producto.precio ?? producto.price ?? 0,
      imagen: producto.imagen ?? producto.image ?? "",
    };

    setCartItems((prev) => {
      const index = prev.findIndex((item) => item.id === normalizedProduct.id);
      if (index !== -1) {
        const updated = [...prev];
        updated[index].cantidad += 1;
        return updated;
      }
      return [...prev, { ...normalizedProduct, cantidad: 1 }];
    });
  };

  const removeFromCart = (idProducto) => {
    setCartItems((prev) => prev.filter((item) => item.id !== idProducto));
  };

  const clearCart = () => setCartItems([]);

  const getTotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
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