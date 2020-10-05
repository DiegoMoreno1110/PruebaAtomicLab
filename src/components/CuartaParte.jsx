import React from 'react';
import styled from "@emotion/styled";
import Column from './Column';

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
        border-color: #00609C;
        margin-top: 269px;
        width: 100%;
        height: 424px;
        position: absolute;
    `;

    return ( 
        <Container>
            <Text style={{fontSize:"50px", color:"white", marginLeft: "450px"}}>¿POR QUÉ</Text>
            <Text style={{fontSize:"50px", color:"#FA4D09", marginLeft: "15px"}}> ATOMIC?</Text>
            <DivBlue></DivBlue>
            <Column
                marginLeft = {"121px"}
                texto1={"Usamos las tecnologías más modernas."}
                texto2={"Innovamos y creamos proyectos retadores."}
                imagen={"Group4041"}
            />
            <Column
                marginLeft = {"525px"}
                texto1={"¡Trabajamos en equipo rumbo al éxito!"}
                texto2={"No tenemos código de vestimenta."}
                imagen={"Group4042"}
            />
            <Column
                marginLeft = {"942px"}
                texto1={"Realizamos actividades para tu bienestar."}
                texto2={"¡Tenemos un parque frente a la oficina!"}
                imagen={"Group4043"}
            />
        </Container>
        
    );
}
 
export default CuartaParte;
