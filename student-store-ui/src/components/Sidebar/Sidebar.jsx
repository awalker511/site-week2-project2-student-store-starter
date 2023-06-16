import * as React from "react";
import "./Sidebar.css";

export default function Sidebar({
  isOpen = false,
  shoppingCart,
  products,
  handleCheckoutFormChange,
  checkOutForm,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
}) {
  return (
    <section className="sidebar">
      <button className="toggle-button">Sidebar</button>
    </section>
  );
}
