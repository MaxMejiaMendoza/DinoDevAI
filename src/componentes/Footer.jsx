import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} DinoDev AI. Todos los derechos reservados.</p>
      <SocialLinks>
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </SocialLinks>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
margin-top: 150px;
  background-color: #000000; /* Fondo negro */
  color: white; /* Texto blanco */
  text-align: center;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Footer;
