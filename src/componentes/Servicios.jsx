import styled from "styled-components";
import B001 from "../../assets/B001.JPG";
import B002 from "../../assets/B002.JPG";
import B003 from "../../assets/B003.JPG";
import { Serv } from "./Serv";

export function Servicios() {
  return (
    <Container>
      <div className="conteinerserv">
        <div>
         
        </div>
        <div className="containerserv">
          <Serv
            imgcurso={B001}
            titulo={"DinoPortafolio"}
            descrip001={"HTML, CSS, JavaScript"}
            descrip={
              "DinoPortafolio es un servicio para crear y gestionar portafolios digitales, permitiendo a desarrolladores y profesionales mostrar sus proyectos, certificaciones, habilidades y experiencias de forma atractiva."
            }
          />
          <Serv
            imgcurso={B002}
            titulo={"DinoBlog"}
            descrip001={"Next.js, Markdown, CSS"}
            descrip={
              "DinoBlog es un servicio de blogging personalizado para desarrolladores y empresas, que facilita la publicación de artículos, tutoriales y noticias con una interfaz sencilla."
            }
          />
          <Serv
            imgcurso={B003}
            titulo={"DinoTodo"}
            descrip001={"React, LocalStorage, CSS"}
            descrip={
              "DinoTodo es un servicio para gestionar tareas y proyectos, que permite crear, organizar y asignar tareas con prioridades, fechas de vencimiento y seguimiento del progreso."
            }
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  height: auto; /* Ajusta el alto según el contenido */
  width: 100%;
  align-items: center;
  justify-content: center;

  .conteinerserv {
    width: 100%;
    max-width: 1200px; /* Limita el ancho máximo del contenedor */
    padding: 0 15px; /* Agrega un poco de padding para que no quede pegado a los bordes en pantallas pequeñas */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .containerserv {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; /* Permite que los elementos se envuelvan en una nueva línea si no caben */
    gap: 50px; /* Espaciado entre los elementos */
    justify-content: center; /* Centra los elementos horizontalmente */
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    .containerserv {
      flex-direction: column; /* Cambia a columna en pantallas más pequeñas */
      gap: 20px; /* Ajusta el gap para pantallas más pequeñas */
      align-items: center; /* Centra los elementos verticalmente */
    }

    margin-top: -100px; /* Ajusta el margen para pantallas más pequeñas si es necesario */
  }

  @media (max-width: 480px) {
    .containerserv {
      gap: 10px; /* Ajusta aún más el gap para pantallas muy pequeñas */
    }

    margin-top: -50px; /* Ajusta el margen superior para pantallas muy pequeñas si es necesario */
  }

  .textbuttom {
    font-size: 2rem; /* Ajusta el tamaño del texto según el diseño */
  }
`;
