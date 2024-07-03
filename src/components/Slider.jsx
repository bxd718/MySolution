import React, { useState, useEffect } from "react";
import {  p4, p5, p6, p7 } from '../assets';
import styles, { layout } from '../style'

const slides = [
  // { url: p1, title: "Primeiro Passo" },
  // { url: p2, title: "Segundo Passo" },
  // { url: p3, title: "Terceiro Passo" },
  { url: p4, title: "" },
  { url: p5, title: "" },
  { url: p6, title: "" },
  { url: p7, title: "Seteimo Passo" },
];

const slideStyles = {
  width: "30%",
  height: "auto",
  borderRadius: "10px",
  margin: "auto", // Centraliza horizontalmente
};

const sliderContainerStyles = {
  position: "relative",
  textAlign: "center", // Centraliza o texto e as setas
};

const sliderTitleStyles = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: "5%",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  left: "5%",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
};
	
const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000); // Avança para o próximo slide a cada 5 segundos
    return () => clearInterval(intervalId); // Limpa o temporizador quando o componente é desmontado
  }, [currentIndex]);

  return (
    <div style={sliderContainerStyles}>
      <h2  className={styles.heading2} >Our Key Projects</h2>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <img src={slides[currentIndex].url} alt={slides[currentIndex].title} style={slideStyles} />
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
