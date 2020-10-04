import React from 'react';
import styled from "@emotion/styled";

const CuartaParte = () => {

    const Container = styled.div`
        background-color: #072348;
        width: auto;
        height: 761px;
        padding-top: 50px;
    `;

    const Text = styled.p`
        text-align: center;
        font-weight: bold;
        padding-top:0px;
        margin-top: -0px;
        margin-bottom: -0px;
        display: inline-block;
    `;

    const DivBlue = styled.div`
        background-color: #00609C;
        border-top-left-radius: 70px;
        border-top-right-radius: 70px;
        margin-top: 269px;
        width: 100%;
        height: 424px;
        position: relative;
    `;

    return ( 
        <Container>
            <Text style={{fontSize:"50px", color:"white", marginLeft: "450px"}}>¿POR QUÉ</Text>
            <Text style={{fontSize:"50px", color:"#FA4D09", marginLeft: "15px"}}> ATOMIC?</Text>
            <DivBlue></DivBlue>

        </Container>
        
    );
}
 
export default CuartaParte;
