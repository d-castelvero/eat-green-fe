import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function GreenCard({ imageSrc, title,text}) {
  return (
    
    <Card style={{border:'none', borderRadius:'17px', backgroundColor:"#EEEAE6", paddingBottom:'15px'}}>
      <Card.Img variant="top" src={imageSrc} style={{borderRadius:'17px 17px 0px 0px'}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{fontSize:'14px'}}>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}


export default GreenCard;






