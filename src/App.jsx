import styled from "styled-components";
import { Header } from "./assets/componentes/Header";
import { BackGround } from "./assets/componentes/BackGround";
import { Servicios } from "./assets/componentes/Servicios";

export function App() {
  return (
  <Container>

         <Header/>
         <BackGround/>
         <div className="serviciossss">
         <Servicios/>
         </div>
         

  </Container>
  );
}
const Container = styled.div`

color: black;
background-color: #000;

.serviciossss{
  margin-top: 150px;
}
`;
