import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartWidget.css"; 

const CartWidget = () => {
  const [open, setOpen] = useState(false);
  const { cartItems, removeFromCart, clearCart, getTotal } = useCart();

  return (
    <div className={`cart-widget-container ${open ? "open" : ""}`}>
      <button className="cart-widget-btn" onClick={() => setOpen(!open)}>
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartItems.reduce((acc, item) => acc + item.cantidad, 0)}</span>
      </button>
      {open && (
        <div className="cart-dropdown">
          <h3>Mi Carrito</h3>
          {cartItems.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <span>{item.nombre} x{item.cantidad}</span>
                  <span>${item.precio * item.cantidad}</span>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="cart-total">
            <span>Total:</span>
            <strong>${getTotal()}</strong>
          </div>
          <button className="clear-btn" onClick={clearCart}>Vaciar carrito</button>
          {cartItems.length > 0 && (
            <Link to="/checkout" className="checkout-btn">Finalizar compra</Link>
          )}
        </div>
      )}
    </div>
  );
};

export default CartWidget;