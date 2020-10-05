import React, {useState}  from 'react';
import styled from "@emotion/styled";
import {Link,  Redirect } from 'react-router-dom';

const CentralEdit = ({setNextComponent}) => {

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
        margin-top: 100px;

    `;

    const Boton = styled.button`
        background-color:#FA4D09;
        border: #FA4D09;
        border-radius: 28px;
        width: 180px;
        height: 48px;
        color: white;
        font-family: Montserrat;
        font-size: 24px;

    `;

    const color = "#FFFFFF";

    const [message, setMessage] = useState(false);


    const showMessage = () =>{
        

        setMessage(true);

    }

    return ( 
        <Container>
            <div>
                <img  src={require("../../images/Group4016.png")} style={{marginLeft : "104px"}} alt="1"></img>
                <img  src={require("../../images/Group4020.png")} style={{marginLeft : "164px"}} alt="2"></img>
                <img  src={require("../../images/Group4017.png")} style={{marginLeft : "164px"}} alt="3"></img>
                <img  src={require("../../images/Group4018.png")} style={{marginLeft : "164px"}} alt="4"></img>
            </div>
            <Progress style={{backgroundColor: "#FFFFFF" , width: "814px", marginTop: "15px"}}>
                <Progress style={{backgroundColor: "#FA4D09", width: `320px`}}></Progress>
            </Progress>
            <Link to='/conocenos'><p style={{fontSize: "24px", textDecoration: "none", color: "white"}}>Regresar</p></Link>
            <TituloContainer>
                <img  src={require("../../images/Group4023.png")} alt="1"  style={{marginTop: "10px"}}></img>
                <PTitulo style={{marginLeft: "27px", color: "white"}}>EDITA TU </PTitulo>
                <PTitulo style={{marginLeft: "245px", color: "#FA4D09"}}>CELULAR </PTitulo>
            </TituloContainer>

            <p style={{color: `${color}`, fontSize: "24px", marginTop: "55px"}}>Necesitamos validar tu número para continuar </p>
            <p style={{color: `${color}`, fontSize: "20px"}}>Ingresa tu número a 10 dígitos y te enviaremos un código SMS </p>
            
            {message ? 
                
                <Redirect to='/message' />
                
                
                : null}

            <form style={{marginBottom: "21px"}} >
                <p style={{color: "#FFFFFF", fontSize: "21px"}}>Número de celular</p>
                <TextField 
                    type="text" 
                    id="name" 
                    name="name"
                    
                />
                
                <DivBoton>
                    <Boton type="submit" onClick={showMessage}>Continuar</Boton>
                </DivBoton>
                
            </form>

            
        </Container>
            

     );
}
 
export default CentralEdit;
