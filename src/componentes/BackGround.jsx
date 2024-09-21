import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import back from "../../assets/dede.jpg";

export function BackGround() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const text = "DINODev  AI";

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <Container onMouseMove={handleMouseMove}>
      <div>
        <StyledImage src={back} alt="background" />
        <BlackOverlay /> {/* Capa negra con opacidad */}
      </div>
      <Overlay>
        <Message>
          {text.split("-").map((char, index) => (
            <Letter
              key={index}
              style={{
                transform: `translate(${
                  (mousePosition.x - window.innerWidth / 2) * 0.2
                }px, ${
                  (mousePosition.y - window.innerHeight / 2) * 0.2
                }px)`,
              }}
            >
              {char}
            </Letter>
          ))}
        </Message>
      </Overlay>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const BlackOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Capa negra con opacidad */
  z-index: 2; /* Asegura que la capa negra esté sobre la imagen */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.div`
  display: flex;
  font-size: 5vw;
  font-weight: bold;
  color: white;
  text-align: center;
  cursor: none;
  z-index: 3; /* Asegura que el texto esté sobre la capa negra */

  @media (max-width: 768px) {
    font-size: 8vw;
  }

  @media (max-width: 480px) {
    font-size: 10vw;
  }
`;

const Letter = styled.span`
  display: inline-block;
  transition: transform 0.1s ease;
`;
