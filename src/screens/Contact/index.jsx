import { useState } from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { TabContainer } from "react-bootstrap";

function Contact() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const saveUserContact = async () => {
    const apiUrl = "https://mern-eat-green-app.onrender.com";
    const response = await axios.post(
      `${apiUrl}/api/contact`,
      {
        name: name,
        lastName: lastName,
        password: password,
        message: message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    document.getElementById("response").innerHTML = response.data;
    return response;
  };

  const deleteUserContact = async () => {
    const apiUrl = "https://mern-eat-green-app.onrender.com";
    const response = await axios.post(
      `${apiUrl}/api/contact/delete`,
      {
        name: name,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    document.getElementById("response").innerHTML = response.data;
    return response;
  };
  const updateUserContact = async () => {
    const apiUrl = "https://mern-eat-green-app.onrender.com";
    const response = await axios.post(
      `${apiUrl}/api/contact/update`,
      {
        name: name,
        lastName: lastName,
        password: password,
        message: message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    document.getElementById("response").innerHTML = response.data;
    return response;
  };
  return (
    <>
     <img
        width="100%"
        src="/public/assets/contacto/Banner-top.png"
        alt="banner"
      />
      <Container>
        <FormContainer>
          <h3>Contacto</h3>
         

          <Form.Control
            id="name"
            type="input"
            placeholder="Ingresa tu nombre"
            required
            onChange={({ target }) => setName(target.value)}
            style={{ border:"1px solid #7EB693" }}
          />
          <Form.Control
            id="last-name"
            type="input"
            placeholder="Ingresa tu apellido"
            onChange={({ target }) => setLastName(target.value)}
            style={{ border:"1px solid #7EB693" }}
          />
          <Form.Control
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            onChange={({ target }) => setPassword(target.value)}
            style={{ border:"1px solid #7EB693" }}
          />
          <Form.Control
            id="message"
            type="password"
            placeholder="Mensaje"
            as="textarea"
            rows={5}
            onChange={({ target }) => setMessage(target.value)}
            style={{ border:"1px solid #7EB693" }}
          />
          <TabsContainer>
            <Button
              variant="primary"
              type="submit"
              style={{
                backgroundColor: "#274C5B",
                border: "none",
                width: "180px",
              }}
              onClick={({ e }) => saveUserContact()}>
              Enviar
            </Button>
            <Button
              variant="primary"
              type="submit"
              style={{
                backgroundColor: "#274C5B",
                border: "none",
                width: "180px",
                color: "#fff",
              }}
              onClick={({ e }) => deleteUserContact()}>
              Borrar Mensaje
            </Button>
            <Button
              variant="primary"
              type="submit"
              style={{
                backgroundColor: "#274C5B",
                border: "none",
                width: "180px",
                color: "#fff",
              }}
              onClick={({ e }) => updateUserContact()}>
              Actualizar Mensaje
            </Button>
          </TabsContainer>
          <div
            id="response"
            class="alert alert-dark"
            role="alert"
            style={{ border: "none" }}>
            
          </div>
        </FormContainer>
        
      </Container>

      <img
          width="100%"
          src="/public/assets/contacto/Banner-bottom.png"
        />

     
    </>
  );
}

export default Contact;

// *** Styles ***
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  padding: 34px;
  padding-top: 43px;
  padding-bottom: 25px;
  border-radius: 18px 0px 0px 18px;
  justify-content: center;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  padding-top: 35px;
  padding-bottom: 80px;
  justify-content: center;
`;
