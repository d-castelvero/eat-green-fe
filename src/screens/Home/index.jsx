import React, { useEffect, useState } from "react";
import axios from "axios";
import GreenCard from "../../components/GreenCard";
import CardGroup from "react-bootstrap/CardGroup";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  const [greenCards, setGreenCards] = useState(null);
  

  const getGreenCards = async () => {
    const apiUrl = "https://mern-eat-green-app.onrender.com";
    const green = await axios.get(`${apiUrl}/api/green`);
    return green.data;
  };

  

  useEffect(() => {
    getGreenCards().then((green) => {
      setGreenCards(green);
    });

  }, []);

  if (!greenCards) {
    return <></>;
  }

  return (
    <>
      <img width="100%" src="/public/assets/landing/Banner_1.png" alt="banner" />



      <Container>
        <CardGroup
          style={{
            gap: "12px",
            alignItems: "center",
            padding: "70px",
            paddingTop: "40px",
            paddingBottom: "20px",
          }}
        >
          {greenCards.map((item) => (
            <GreenCard
              title={item.title}
              text={item.text}
              imageSrc={item.imageSrc}

              
            />
          ))}
        </CardGroup>
      </Container>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "20px",
            paddingTop: "50px",
            gap: "100px",
          }}>
          <h4 style={{ color: "#202335" }}>
            {" "}
            Productos destacados y promociones
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            paddingTop: "20px",
            alignItems: "center",
            justifyContent: "center",
            maxWidth:'1100px',
          }}>
          <Card
            style={{
              width: "18rem",
            }}>
            <Card.Img
              variant="top"
              src="/assets/landing/Broccoli.png"
            />
            <Card.Body>
              <Card.Title>Brocoli</Card.Title>
              <Card.Text>
                $1300.00,00
              </Card.Text>
              <Button
                variant="primary"
                style={{ backgroundColor: "#274C5B", border: "none" }}>
                Añadir
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
            }}>
            <Card.Img
              variant="top"
              src="/assets/landing/Banana.png"
            />
            <Card.Body>
              <Card.Title>Banana</Card.Title>
              <Card.Text>
                $1400.00,00
              </Card.Text>
              <Button
                variant="primary"
                style={{ backgroundColor: "#274C5B", border: "none" }}>
                Añadir
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
            }}>
            <Card.Img
              variant="top"
              src="/assets/landing/Pistachio.png"
            />
            <Card.Body>
              <Card.Title>Pistacho</Card.Title>
              <Card.Text>
                $1500.00,00
              </Card.Text>
              <Button
                variant="primary"
                style={{ backgroundColor: "#274C5B", border: "none" }}>
                Añadir
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
            }}>
            <Card.Img
              variant="top"
              src="/assets/landing/Tomato.png"
            />
            <Card.Body>
              <Card.Title>Tomates en racimos</Card.Title>
              <Card.Text>
                $1700.00,00
              </Card.Text>
              <Button
                variant="primary"
                style={{ backgroundColor: "#274C5B", border: "none" }}>
                Añadir
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            paddingTop: "20px",
            alignItems: "center",
            justifyContent: "center",
            maxWidth:'1100px',
            paddingBottom:'50px',
          }}>
          <Card
            style={{
              width: "18rem",
            }}>
            <Card.Img
              variant="top"
              src="/assets/landing/Bean.png"
              style={{width:'90%'}}

            />
            <Card.Body>
              <Card.Title>Arvejas</Card.Title>
              <Card.Text>
                $1200.00,00
              </Card.Text>
              <Button
                variant="primary"
                style={{ backgroundColor: "#274C5B", border: "none" }}>
                Añadir
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
            }}>
            <Card.Img
              variant="top"
              src="/assets/landing/Nut.png"
              style={{width:'73%'}}
            />
            <Card.Body>
              <Card.Title>Avellana</Card.Title>
              <Card.Text>
                $1200.00,00
              </Card.Text>
              <Button
                variant="primary"
                style={{ backgroundColor: "#274C5B", border: "none" }}>
                Añadir
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
            }}>
            <Card.Img
              variant="top"
              src="/assets/landing/Eggs.png"
              style={{width:'94%'}}

            />
            <Card.Body>
              <Card.Title>Huevos</Card.Title>
              <Card.Text>
                $1500.00,00
              </Card.Text>
              <Button
                variant="primary"
                style={{ backgroundColor: "#274C5B", border: "none" }}>
                Añadir
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
            }}>
            <Card.Img
              variant="top"
              src="/assets/landing/Bread.png"
              style={{width:'100%'}}

            />
            <Card.Body>
              <Card.Title>Pan Integral</Card.Title>
              <Card.Text>
                $1500.00,00
              </Card.Text>
              <Button
                variant="primary"
                style={{ backgroundColor: "#274C5B", border: "none" }}>
                Añadir
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>

     

    </>
  );
}

export default Home;

// ** Styles **
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
