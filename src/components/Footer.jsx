import React from 'react'
import styled from 'styled-components';
function Footer() {


    return(
        <FooterContainer className="main-footer ">
        <div className="footer-middle">
        <div className="row">
        {/* Columna 1 */}
        <div className="col-md-3 col-sm-6">
            <h4>Conocenos </h4>
        <ul className='list-unstyled'>
            <li> Contacto </li>
            <li>Sobre nosotros </li>
            <li>Sobre los productos </li>
            <li>Eat green stores </li>
        </ul>
        </div>

         {/* Columna 2 */}
         <div className="col-md-3 col-sm-6">
         <h4>Productos </h4>
        <ul className='list-unstyled'>
        <li>Conoce nuestras granjas </li>
        <li>Conoce nuestras huertas </li>
        <li>Visitanos</li>
        <li>Otras tiendas </li>
        </ul>
        </div>

          {/* Columna 3 */}
          <div className="col-md-3 col-sm-6">
         <h4>Sustentabilidad </h4>
        <ul className='list-unstyled'>
        <li>Ecologia </li>
        <li>Cuidamos el medio ambiente </li>
        <li>Nuestra conciencia ecologica </li>
        <li>Productos Sustentables</li>
        </ul>
        </div>

         {/* Columna 4 */}
         <div className="col-md-3">
            <img src="/public/assets/landing/Footer_logo1.png" style={{width:'70%'}} alt="" />
            
        </div>
        </div>
        </div>
        </FooterContainer>
    )
}

export default Footer;

// ** Styles **

const FooterContainer = styled.footer`

.footer-middle{
    background: #274C5B;
    color: white;
    padding: 30px;
    padding-top: 80px;
}

.footer-bottom{
    display: flex;
    flex-direction: column;
    align-items: center;

}

.row h4 {
    font-size: 20px;
}

`;