import styled from "styled-components";
import B001 from "../../assets/B001.JPG"
import B002 from "../../assets/B002.JPG"
import B003 from "../../assets/B003.JPG"

import { Serv } from "./Serv";

export function Servicios() {
  return (
    <Container>
      <div className="conteinerserv">
        <div>
          <span className="textbuttom">Servicios</span>
        </div>

        <div className="containerserv">

        <Serv
        imgcurso={B001}
            titulo={"DinoPortafolio"}
            descrip001={"HTML, CSS, JavaScript"}
            descrip={
              "Un servicio orientado a la gestión de tareas y proyectos para equipos de desarrollo o individuos. DinoTodo permite crear, organizar y asignar tareas con facilidad, proporcionando herramientas como listas de tareas, fechas de vencimiento, asignación de prioridades, notificaciones automáticas y seguimiento de progreso."
            }
          />
          <Serv
           imgcurso={B002}
            titulo={"DinoBlog"}
          descrip001={"Next.js, Markdown, CSS"}
            descrip={
              "Servicio especializado en la creación y gestión de portafolios digitales para desarrolladores y profesionales. DinoPortafolio ofrece una plataforma dinámica y personalizable donde los usuarios pueden mostrar sus proyectos, certificaciones, habilidades y experiencias de manera visualmente atractiva."
            }
          />
          <Serv
           imgcurso={B003}
            titulo={"DinoTodo"}
            descrip001={"React, LocalStorage, CSS"}
            descrip={
              "Un servicio que proporciona una plataforma de blogging personalizada para desarrolladores y empresas que buscan compartir contenido técnico o profesional. DinoBlog permite la publicación de artículos, tutoriales, noticias y actualizaciones, con una interfaz sencilla de usar."
            }
          />

  
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  margin-top: -180px;
  display: flex;
  flex-direction: column;
  height: 1500px;
  width: 100%;
  align-items: center;
  .containerserv {
    display: flex;
    flex-direction: row;
    gap: 80px;
    margin-top: 50px;
  }
  .containerserv2 {
    display: flex;
    flex-direction: row;
    gap: 80px;
    margin-top: 50px;
  }
`;
