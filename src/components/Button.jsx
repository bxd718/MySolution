import React from 'react';

const Button = ({ styles }) => {
  const phoneNumber = '+258820978401';
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <button type='button' className={`py-4 px-6 bg-gray-500 hover:bg-gray-600 font-poppins font-medium text-lg text-white outline-none ${styles} rounded-md`}>
      Get in touch
      </button>
    </a>
  );
};

export default Button;
