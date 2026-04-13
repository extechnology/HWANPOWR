import React from "react";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

const PHONE_NUMBER = "919207889933"; 

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = "",
  className = "",
  children,
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <button onClick={handleClick} className={className}>
      {children || "Chat on WhatsApp"}
    </button>
  );
};

export default WhatsAppButton;
