import styled from "styled-components";
import { useState, useEffect } from "react";
import { Menu } from "./Menu";
import dinologo from "../../assets/dinologo.jpg";

export function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container className={scrollPosition > 50 ? 'scrolled' : ''}>
      <div className="header">
        <div className="imageContent">
          <img src={dinologo} alt="Logo" />
        </div>
        <div className="namelogo">
          <Menu />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 120px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, height 0.3s ease, padding 0.3s ease, flex-direction 0.3s ease; /* Transición para cambios suaves */

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    justify-content: space-between;
    transition: flex-direction 0.3s ease, align-items 0.3s ease; /* Transición para los cambios en el diseño flexible */
  }

  .header .imageContent {
    display: flex;
    align-items: center;
    height: 100%;
    width: 25%;
    justify-content: center;
    transition: width 0.3s ease; /* Transición suave cuando cambia el ancho */
  }

  .header .imageContent img {
    max-height: 70px;
    max-width: 100%;
    border-radius: 50%;
    transition: transform 0.5s ease, filter 0.5s ease;
  }

  .header .imageContent img:hover {
    transform: scale(1.1);
    cursor: pointer;
    filter: brightness(1.1);
  }

  .header .namelogo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    text-align: center;
    transition: width 0.3s ease; /* Transición suave para el ancho del menú */
  }

  /* Cambios para pantallas pequeñas */
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      align-items: center;
      transition: flex-direction 0.3s ease, align-items 0.3s ease; /* Transición suave */
    }

    .header .imageContent {
      width: 100%;
      transition: width 0.3s ease; /* Transición suave para el ancho */
    }

    .header .imageContent img {
      max-height: 50px;
      transition: max-height 0.3s ease; /* Transición suave cuando cambia la altura de la imagen */
    }
    
    .header .namelogo {
      width: 100%;
      margin-top: 10px;
      transition: width 0.3s ease, margin-top 0.3s ease; /* Transición suave para el ancho y el margen */
    }
  }

  &.scrolled {
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    height: 100px;
    padding: 0 15px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease, height 0.3s ease, padding 0.3s ease;
  }
`;
