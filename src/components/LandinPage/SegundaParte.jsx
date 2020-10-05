import React from 'react';
import styled from "@emotion/styled";
import Card from './Card';
import CardOrange from './CardOrange';

const SegundaParte = () => {

    const Container = styled.div`
        background-color: #072348;
        width: auto;
        height: 761px;
    `;

    const Text = styled.p`
        text-align: center;
        font-weight: bold;
        padding-top:0px;
        margin-top: -0px;
        margin-bottom: -0px;
    `;

    const ContainerCard = styled.div`
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 50px;
        width: 80%;
        height: 561px;
    
    `;

    

    return ( 
        <Container>
            <Text style={{fontSize:"50px", color:"white"}}>SOMOS EL BRAZO DERECHO</Text>
            <Text style={{fontSize:"50px", color:"#FA4D09"}}>DE LA TECNOLOGÍA</Text>
            <ContainerCard>
                <Card
                    color={"white"}
                    marginLeft={"0px"}
                    marginTop={"61px"}
                    width={"350px"}
                    height={"439px"}
                    titulo={"EXPLORA"}
                    texto1={"Innovación y creación tecnológica"}
                    texto2={"UI/UX"} 
                    texto3={"Innovación"}
                    imagen={"Group4035"}
                />    
                  
                <CardOrange
                    marginLeft={"0px"}
                    width={"350px"}

                />

                <Card
                    color={"white"}
                    marginLeft={"0px"}
                    marginTop={"61px"}
                    width={"350px"}
                    height={"439px"}
                    titulo={"CONQUISTA"}
                    texto1={"Desarrollo tecnológico a la medida"}
                    texto2={"Ciberseguridad"} 
                    texto3={"Servicios de la Nube"}
                    imagen={"Group4037"}
                />
                
                
            </ContainerCard>
        </Container>

    );
}
 
export default SegundaParte;
