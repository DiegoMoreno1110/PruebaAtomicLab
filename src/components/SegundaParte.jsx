import React from 'react';
import styled from "@emotion/styled";
import Card from './Card';

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
                />    
                  
                <Card
                    color={"white"}
                    marginLeft={"0px"}
                    marginTop={"61px"}
                    width={"350px"}
                    height={"439px"}
                />        
            </ContainerCard>
        </Container>

    );
}
 
export default SegundaParte;
