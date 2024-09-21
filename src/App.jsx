import styled from "styled-components";
import { Header } from "./assets/componentes/Header";
import { BackGround } from "./assets/componentes/BackGround";
import { Servicios } from "./assets/componentes/Servicios";
import Footer from "./assets/componentes/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function App() {
  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    const serviciosElement = document.getElementById("servicios");
    const { top, bottom } = serviciosElement.getBoundingClientRect();
    const isVisible = top < window.innerHeight && bottom > 0;
    setIsInView(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <div className="header">
        <Header />
      </div>

      <BackGround />

      <SubContainer
        id="servicios"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <Servicios />
      </SubContainer>

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #202020, #000000);
  min-height: 100vh;
  overflow-x: hidden;

  .header {
    z-index: 2;
    position: relative;
  }

  @media (max-width: 768px) {
  
  }

  @media (max-width: 480px) {
    
  }
`;

const SubContainer = styled(motion.div)`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;
