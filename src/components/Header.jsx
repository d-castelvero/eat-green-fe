import styled from "styled-components";
import { publicUrls } from "../config";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Header() {
  const tabs = [
    {
      id: "home",
      text: "Home",
      link: publicUrls.home,
    },
  
    {
      id: "nosotros",
      text: "Nosotros",
      link: publicUrls.nosotros,
    },
    {
      id: "tienda",
      text: "Tienda",
      link: publicUrls.tienda,
    },
    {
      id: "contacto",
      text: "Contacto",
      link: publicUrls.contact,
    },

    {
      id: "login",
      text: "Login",
      link: publicUrls.login,
    },

    
  ];
  return (
    <Container style={{justifyContent:'space-around'}}>
      <img width="150px" src="/public/assets/landing/Eat_green_logo.png" alt="logo" />

      <TabsContainer>
        {tabs.map((item) => (
          <Link to={item.link}>{item.text}</Link>
        ))}
      </TabsContainer>
      <Navbar className="justify-content-between">
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder= "Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
          <Button style={{backgroundColor:"#7EB693",color:'#274C5B',border:'none'}}>Buscar</Button> 
          </Col>
        </Row>
      </Form>
    </Navbar>
    </Container>

    
  );
}

export default Header;

// ** Styles **
const Container = styled.div`
  height: 80px;
  display: flex;
  gap: 30px;
  padding: 3rem;
  align-items: center;

  a {
    text-decoration: none;
    color: #202335;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;


