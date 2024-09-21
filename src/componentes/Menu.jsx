
import styled from "styled-components";


export function Menu() {

  return (
    <Container>
      <div className="menu">
        <span className="menutext"  >Projects</span>
        <span className="menutext"  >Services</span>
        <span className="menutext"  >Contact</span>
 
      </div>
    </Container>
  );
}
const Container = styled.div`

height: 100%;

.menu {


  height: 100%;
  justify-content:center;
  align-items: center;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    font-weight: 400;
    display:flex;
    flex-direction: row;
    gap: 50px;
    span{
      color: #fff;
    }
    
}

.menutext:hover {
  color: #ffbb66; 
  cursor: pointer; 
}

`;
