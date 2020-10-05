import React from 'react';
import styled from "@emotion/styled";

const CentralExito = ({setNextComponent}) => {

    const Container = styled.div`
        margin-left: 108px;
        position: absolute;
    `;
    
    const TituloContainer=  styled.div`
        margin-top: 106px;
    `;
    
    const PTitulo = styled.p`
        font-size: 46px;
        margin-top: -50px;
        font-weight: bold;

    
    `;


    const color = "#FFFFFF";


    return ( 
        <Container>
            <TituloContainer>
                <PTitulo style={{color: "white"}}>TUS DATOS </PTitulo>
                <PTitulo style={{color: "#FA4D09"}}>HAN SIDO ENVIADOS </PTitulo>
                <PTitulo style={{color: "#FA4D09"}}>CON ÉXITO </PTitulo>
            </TituloContainer>

            <p style={{color: `${color}`, fontSize: "24px", marginTop: "29px"}}>En breve recibirás un correo de confrimación </p>
            <p style={{color: `${color}`, fontSize: "24px", marginTop: "-25px"}}>por parte del equipo de AtomicLabs: </p>
            <p style={{color: `${color}`, fontSize: "20px"}}>Recuerda revisar tu carpeta de SPAM</p>   
            <p style={{color: `${color}`, fontSize: "20px"}}>¡Esperamos verte pronto!</p>           
            
        </Container>
            

     );
}
 
export default CentralExito;
