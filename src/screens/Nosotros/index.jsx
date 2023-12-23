import React from "react";
import { Container, TabContainer } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';


function Nosotros() {
  return (
    <>
    
      <img
        width="100%"
        src="/public/assets/nosotros/sobre-nos.png"
        alt="banner"
      />
      <Container
        style={{ display: "flex", flexDirection: "row", paddingTop: "50px" }}>
        <img
          src="/public/assets/nosotros/Image.png"
          alt=""
          style={{ width: "500px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "30px",
          }}>
          <h1>¡Bienvenidos!</h1>
          <p>
            {" "}
            El Brote Tienda Natural creemos firmemente que una mejor y más
            saludable alimentación es posible. Y buscamos hacerla accesible a
            todas las personas y familias. <br />
            Argentina es una de los pocos países del mundo con un clima y un
            suelo tan variado como apto para el cultivo de cientos de frutas y
            verduras a lo largo y ancho de nuestra tierra. Nuestro arreglo
            exclusivo y directo con diferentes productores y huertas orgánicas y
            agroecológicas de todo el país, nos permite hacerte llegar una
            amplia variedad de frutas y verduras libres de agrotóxicos al mejor
            precio (eliminando costos y comisiones innecesarias y pagando un
            precio más justo a los productores por su trabajo). En nuestra
            tienda online vas a encontrar todos los cultivos de temporada para
            que tu alimentación sea 100% natural. Bienvenido!
          </p>
          <Button style={{ width: "30%", backgroundColor:'#274C5B' , border:'none'}}>Explora mas</Button>
        </div>

      </Container>
<div style={{display:'flex', flexDirection:'row', justifyContent:'center', gap:'20px', backgroundColor:'#F9F8F8', padding:'80px'}}>

      <Card style={{ width: '18rem', display:'flex', flexDirection:'column',alignItems:'center', border:'none' }}>
      <Card.Img variant="top" src="/public/assets/nosotros/Icon.png" style={{width:'80px', paddingTop:'50px'}} />
      <Card.Body>
        <Card.Title>Politica de Devolucion</Card.Title>
        <Card.Text>
          Siempre podes devolver los productos que no te gustaron y te devolvemos tu dinero.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', display:'flex', flexDirection:'column',alignItems:'center',  border:'none' }}>
      <Card.Img variant="top" src="/public/assets/nosotros/Icon-1.png" style={{width:'80px', paddingTop:'50px'}} />
      <Card.Body>
        <Card.Title>100% Frescos</Card.Title>
        <Card.Text>
          Nuestros productos son 100% organicos y nos aseguramos que llegen frescos a tu hogar.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', display:'flex', flexDirection:'column',alignItems:'center',  border:'none' }}>
      <Card.Img variant="top" src="/public/assets/nosotros/Icon-2.png" style={{width:'80px', paddingTop:'50px'}} />
      <Card.Body>
        <Card.Title>Soporte 24/7</Card.Title>
        <Card.Text>
          Te brindamos soporte 24/7 sobre los productos o posibles errores de la plataforma.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', display:'flex', flexDirection:'column',alignItems:'center' ,  border:'none'}}>
      <Card.Img variant="top" src="/public/assets/nosotros/Icon-3.png" style={{width:'80px', paddingTop:'50px'}} />
      <Card.Body>
        <Card.Title>Pagos Seguros</Card.Title>
        <Card.Text>
          En nuestra plataforma los pagos son seguros, y por esto contamos con doble autentificacion en la tienda.
        </Card.Text>
      </Card.Body>
    </Card>

</div>
    

      {/* Banner Footer  */}
      <img
        width="100%"
        src="/public/assets/Login/Banenr_Login_1.png"
        alt="banner"
      />
    </>
  );
}

export default Nosotros;
