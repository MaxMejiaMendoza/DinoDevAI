import styled from "styled-components";
import back from "../../assets/ff.png";

export function BackGround() {
  return (
    <Container>
      <img src={back} alt="" />
      <Overlay>
        <Message>DINO Dev AI</Message>
      </Overlay>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    display: block;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.div`
  color: white;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;

