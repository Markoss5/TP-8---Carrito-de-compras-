import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { cartItems, removeFromCart, clearCart, getTotal } = useCart();
  const [open, setOpen] = useState(false);

  const itemCount = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div style={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        style={{
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "50%",
          padding: 10,
          boxShadow: "0 2px 5px rgba(0,0,0,.2)",
          cursor: "pointer",
        }}
      >
        🛒 <span>{itemCount}</span>
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            marginTop: 10,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 8,
            width: 300,
            padding: 15,
            boxShadow: "0 4px 16px rgba(0,0,0,.15)",
          }}
        >
          <h4>Carrito</h4>
          {cartItems.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {cartItems.map((item) => (
                <li key={item.id} style={{ marginBottom: 8 }}>
                  {item.nombre} x{item.cantidad} - ${item.precio * item.cantidad}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      marginLeft: 8,
                      padding: "2px 8px",
                      fontSize: 12,
                      color: "#fff",
                      background: "#e74c3c",
                      border: "none",
                      borderRadius: 4,
                      cursor: "pointer",
                    }}
                  >
                    Quitar
                  </button>
                </li>
              ))}
            </ul>
          )}
          <hr />
          <p>
            <b>Total: ${getTotal()}</b>
          </p>
          <button
            onClick={clearCart}
            style={{
              background: "#e67e22",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              padding: "6px 10px",
              cursor: "pointer",
              marginTop: 5,
            }}
            disabled={cartItems.length === 0}
          >
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default CartWidget;