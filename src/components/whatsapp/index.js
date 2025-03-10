import React from "react";
import "./style.css";

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923401901808"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img
        src="/images/whatsapp.png"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default FloatingWhatsAppButton;
