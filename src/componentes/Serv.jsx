import React from "react";
import styled, { keyframes } from "styled-components";
import B003 from "../../assets/B003.JPG";
import Logo003 from "../../assets/logo003.png";

const floating = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const rotation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

const Card = styled.div`
  overflow: hidden;
  width: 300px;
  height: 390px;
  position: relative;
  border-radius: 5px;
  cursor: pointer;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 600ms ease, box-shadow 300ms ease;
  box-shadow: 0px 0px 10px 1px #000000ee;
  border-radius: 5px;

  &:hover {
    transform: rotateY(180deg) scale(1.05);
    box-shadow: 0px 0px 20px 3px #ff9966; 
    border-radius: 5px;/* Cambia la sombra al girar */
  }
`;

const Side = styled.div`
  background-color: #151515;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
  border-radius: 5px;
  z-index: 4;
`;

const Back = styled(Side)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  border-radius: 5px;

  &::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, transparent);
    animation: ${rotation} 5000ms infinite linear;
    transition: opacity 300ms ease; /* Agregar transición de opacidad */
    border-radius: 5px;
  }

  &:hover::before {
    opacity: 0.8; /* Cambiar opacidad al girar */
  }
`;

const BackContent = styled.div`
  position: absolute;
  width: 99%;
  height: 99%;
  background-color: #000000;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  z-index: 3;

  img {
    width: 120px;
  }
`;

const Front = styled(Side)`
  transform: rotateY(180deg);
  color: white;
  z-index: 2;
  transition: background-color 300ms ease; /* Transición de fondo */
  
  &:hover {
    background-color: #1a1a1a; /* Color de fondo al girar */
  }
`;

const FrontContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 25px;
  z-index: 5;
`;

const Badge = styled.small`
  background-color: #00000055;
  padding: 2px 10px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  width: fit-content;
  z-index: 2;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size:10px;
`;

const Description = styled.div`
  box-shadow: 0px 0px 10px 5px #00000088;
  width: 100%;
  padding: 10px;
  background-color: #00000099;
  backdrop-filter: blur(5px);
  border-radius: 5px;
  z-index: 4;
  font-size: 14px;
  color: #fff;
`;

const Title = styled.div`
  font-size: 11px;
  display: flex;
  justify-content: space-between;
  z-index: 2;
`;

const CardFooter = styled.p`
  color: #ffffff88;
  margin-top: 5px;
  font-size: 10px;
  z-index: 2;
`;

const ImgContainer = styled.div`
  position: absolute;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 2;

`;

const Circle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #ffbb66;
  position: absolute;
  filter: blur(15px);
  animation: ${floating} 2600ms infinite linear;
  z-index: 1;

  &.bottom {
    background-color: #ff8866;
    left: 50px;
    top: 150px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  &.right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }
`;

export const Serv = ({ imgcurso,descrip,titulo,descrip001 }) => {
  return (
    <Card>
      <Content>
        <Back>
          <BackContent>
            <img src={Logo003} alt="" />
            <h2>{titulo}</h2>
          </BackContent>
        </Back>
        <Front>
          <FrontContent>
            <ImgContainer>
              <img
                src={imgcurso}
                alt="Course"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "5px"
                }}
              />
            </ImgContainer>
            <Title>
              <h2>{descrip001}</h2>
              
            </Title>
            <Description>
              {descrip}
              <CardFooter>mas información</CardFooter>
            </Description>
          </FrontContent>
        </Front>
      </Content>
    </Card>
  );
};
