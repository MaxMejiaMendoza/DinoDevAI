import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { Menu } from "./Menu";

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
    <Container >

      <div>
      <div className="header" >
        <div className="namelogo">
         <Menu/>
        </div>

        <div className="imageContent">
        </div>
      </div>
      </div>
     
    </Container>
    
  );
}
const Container = styled.div`


  height: 90px;
  position: fixed;
  top: 0;
  left: 900px;
  width: 100%;
z-index:100;


  .menu-container  {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    transition: background-color 0.3s ease;
}



  .menu-container.scrolled {
    background-color: rgba(241, 235, 235, 0.15);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%; /* Fondo negro semi-transparente al hacer scroll */
}

  .header {

    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }

  .header .imageContent {
    display: flex;
    flex-direction: row;
    text-align: center;
    height: 100%;
    width: 25%;
  }

  .header .imageContent img{
    margin-top:1%;
    height:90%;
   z-index:100;
  }

  .header .imageContent img:hover{
    margin-top:1%;
    height:100%;
   z-index:100;
   transition: width 0.5s, height 0.5s, background-color 0.5s;
   cursor: pointer;
  }


  .header .imageContent .textlogox{
    width: 10%;
    position: relative;
  animation: entradaArribaderecha 2s forwards;
  opacity: 0;
  }

  .header .namelogo {
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 68%;
  }



@keyframes entradaArribaderecha {
  from {
    transform: translatex(100%); /* Empieza fuera de la pantalla, arriba */
    opacity: 0; /* Elemento inicialmente invisible */
  }
  to {
    transform: translateY(0); /* Termina en su posición normal */
    opacity: 1; /* Elemento completamente visible */
  }
}


`;
