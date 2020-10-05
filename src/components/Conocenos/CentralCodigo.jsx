import React, { useState } from 'react';
import styled from "@emotion/styled";
import OrangeButton from './OrangeButton';
import { Link } from 'react-router-dom';

const CentralCodigo = ({setNextComponent}) => {

    const Container = styled.div`
        margin-left: 108px;
        position: absolute;
    `;
    
    const Progress = styled.div`
        height: 12px;
        border-radius: 6px;
    `;

    const TituloContainer=  styled.div`
        margin-top: 48px;
    `;
    
    const PTitulo = styled.p`
        display: inline-flex;
        position: absolute;
        font-size: 46px;
        margin-top: 0px;
        font-weight: bold;

    
    `;

    const TextField = styled.input`
        width: 444px;
        height: 48px;
    `;

    const DivBoton = styled.div`
        margin-left: 633px;
        margin-top: 50px;

    `;

    

    const [user, setUser] = useState({
        nombre: '',
        apellidos: ''
    });

    const color = "#FFFFFF";

    const handleChange = (event) => {
        event.preventDefault();
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    return ( 
        <Container>
            <div>
                <img  src={require("../../images/Group4016.png")} style={{marginLeft : "104px"}} alt="1"></img>
                <img  src={require("../../images/Group4016.png")} style={{marginLeft : "164px"}} alt="2"></img>
                <img  src={require("../../images/Group4021.png")} style={{marginLeft : "164px"}} alt="3"></img>
                <img  src={require("../../images/Group4018.png")} style={{marginLeft : "164px"}} alt="4"></img>
            </div>
            <Progress style={{backgroundColor: "#FFFFFF" , width: "814px", marginTop: "15px"}}>
                <Progress style={{backgroundColor: "#FA4D09", width: `515px`}}></Progress>
            </Progress>
            <p style={{fontSize: "24px", textDecoration: "none", color: "white"}}>Regresar</p>
            <TituloContainer>
                <img  src={require("../../images/Group4024.png")} alt="1"  style={{marginTop: "10px"}}></img>
                <PTitulo style={{marginLeft: "27px", color: "white"}}>CÓDIGO DE</PTitulo>
                <PTitulo style={{marginLeft: "285px", color: "#FA4D09"}}>VERIFICACIÓN </PTitulo>
            </TituloContainer>

            <p style={{color: `${color}`, fontSize: "24px", marginTop: "55px"}}>Te enviamos un SMS al número: </p>
            <p style={{color: `${color}`, fontSize: "20px", marginTop: "-20px"}}>+ 52 55 1850 9196 </p>
            <p style={{color: `${color}`, fontSize: "16px", marginTop: "0px"}}>Ingresa código d e verificación:  </p>
            
            <form style={{marginBottom: "21px"}} >
                <p style={{color: "#FFFFFF", fontSize: "16px"}}>Código de verificación</p>
                <TextField 
                    type="text" 
                    id="name" 
                    name="name"
                    
                />

                <p style={{color: "#FFFFFF", fontSize: "16px"}}>¿No recibiste el código? Reenviar el código</p>
                
                <DivBoton>
                    <OrangeButton 
                        texto={'Validar código'}
                        setNextComponent={setNextComponent}
                    />
                </DivBoton>
                
            </form>

            
        </Container>
            

     );
}
 
export default CentralCodigo;
