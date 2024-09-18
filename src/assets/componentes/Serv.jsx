import styled from "styled-components";

export function Serv({ titulo, imgcurso, descrip,descrip001 }) {
  return (
    <Container>
      <div className="fondololo">
        <div className="top">
          <div className="imgcourse">
            <img className="img2" src={imgcurso} />
          </div>

          <div className="titulocourse">
            <span>{titulo}</span>
            <span className="descrip001001" >{descrip001}</span>
          </div>

          <div className="descrip002">
            <span>{descrip}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  @keyframes sombra-animacion {
    0% {
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    }
    100% {
      box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.15);
    }
  }
  .fondololo {
    display: flex;
    flex-direction: column;
    background-color: #414141;
    height: 450px;
    width: 300px;
    border-radius: 15px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); /* Sombras */
    transition: transform 2s ease, box-shadow 2s ease;
    animation: sombra-animacion 1s infinite alternate;
  }

  .top {
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background-color: #5e5e5e;
    flex: 1;
    gap: 5px;
  }

  .botoncotizar {
   
height:5%;
  flex: 1 ;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
   width: 100%;
  }

  .titulocourse {
    margin-top: 0px;
    text-align: left;
    display: flex;
    flex-direction: column;
    width: calc(100% - 15px);
    padding: 10px;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    height: 12%;
.descrip001001{
  color: #b1b1b1;
}

  }

  .descrip001 {
    margin-top: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    width: calc(100% - 15px);
    padding: 10px;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #3d3c3c;
    text-decoration: underline;
  }

  .descrip002 {
    margin-top: 20px;
    height: 25%;
    margin-left: 10px;
    text-align: justify;
    display: flex;
    flex-direction: column;
    width: calc(100% - 25px);
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 300;
    color: #ffffff;
  }

  .imgcourse {
    height: 30%;
    width: 100%;
    border-radius: 15px 15px 0px 0px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 15px 15px 0px 0px;
    }
  }

  &:hover {
    border-radius: 15px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
  }
`;
