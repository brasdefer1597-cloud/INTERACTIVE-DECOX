import React from 'react';

const WhatsAppFloat = () => {
    const number = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message = import.meta.env.VITE_WHATSAPP_ENCODED_MESSAGE;

    return (
        <a 
           href={`https://wa.me/${number}?text=${message}`}
           target="_blank"
           rel="noopener noreferrer"
           className="whatsapp-float"
           aria-label="Contactar por WhatsApp"
        >
           <i className="fa-brands fa-whatsapp"></i>
        </a>
    );
};

export default WhatsAppFloat;
