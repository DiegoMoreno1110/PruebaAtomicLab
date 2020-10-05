import React from 'react';
import styled from '@emotion/styled';
import WhiteButton from './WhiteButton';

const QuintaParte = () => {

    const Container = styled.div`
        background-color: #00609C;
        width: auto;
        height: 761px;
    `;

    const ContainerTable = styled.div`
        background-color: white;
        margin-left: 108px;
        width: 1150px;
        height: 421px;
    `;

    const Tabla = styled.table`
        width: 1088px;
        margin-left: 32px;
    `;

    const Td = styled.td`
        height: 50px;
        vertical-align: center;
        color: #0A2240;
        font-size: 16px;
        border-bottom: 1px solid #ddd;
        border-left: 1px solid #ddd;
    `;

    const Th = styled.td`
        height: 50px;
        vertical-align: center;
        width: 489px;
        color: #0A2240;
        font-weight: bold;
    `;

    return ( 
        <Container>
            <ContainerTable>
                <Tabla>
                    <tr>
                        <Th style={{fontSize: "20px"}}>CARACTERÍSTICAS</Th>
                        <Th style={{textAlign: "center", fontSize: "20px"}}>OTROS</Th>
                        <Th style={{textAlign: "center", fontSize: "31px"}}>ATOMIC</Th>
                    </tr>
                    <tr>
                        <Td style={{width: "669px"}}>Equipo inclusivo, honesto y auténtico</Td>
                        <Td style={{textAlign: "center"}}><img src={require("../../images/ic_check_tiny.png")} alt="5"></img></Td>
                        <Td style={{textAlign: "center"}}><img src={require("../../images/ic_check_tiny.png")} alt="5"></img></Td>
                    </tr>
                    <tr>
                        <Td>Puntualidad es nuestro segundo nombre</Td>
                        <Td style={{textAlign: "center"}}><img src={require("../../images/ic_check_tiny.png")} alt="5"></img></Td>
                        <Td style={{textAlign: "center"}}><img src={require("../../images/ic_check_tiny.png")} alt="5"></img></Td>
                    </tr>
                    <tr>
                        <Td>Siempre innovamos en nuestros productos</Td>
                        <Td style={{textAlign: "center"}}><img src={require("../../images/ic_check_tiny.png")} alt="5"></img></Td>
                        <Td style={{textAlign: "center"}}><img src={require("../../images/ic_check_tiny.png")} alt="5"></img></Td>
                    </tr>
                    <tr>
                        <Td>Te ayudamos a crecer e implementar nuevos conocimientos</Td>
                        <Td style={{textAlign: "center"}}></Td>
                        <Td style={{textAlign: "center"}}><img src={require("../../images/ic_check_tiny.png")} alt="5"></img></Td>
                    </tr>
                    
                    <tr>
                        <Td>Nos preocupamos por tu bienestar</Td>
                        <Td style={{textAlign: "center"}}></Td>
                        <Td style={{textAlign: "center"}}><img src={require("../../images/ic_check_tiny.png")} alt="5"></img></Td>
                    </tr>
                    <tr>
                        <Td>El respeto es una parte fundamental</Td>
                        <Td style={{textAlign: "center"}}></Td>
                        <Td style={{textAlign: "center"}}><img src={require("../../images/ic_check_tiny.png")} alt="5"></img></Td>
                    </tr>
                </Tabla>

            </ContainerTable>
            <div style={{marginTop: "81px", marginLeft:"530px"}}>
                <WhiteButton texto={"¡Quiero ser parte!"}/>
            </div>

        </Container>
     );
}
 
export default QuintaParte;
