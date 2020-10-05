import React, { useState } from 'react';
import styled from "@emotion/styled";
import Error from './Error';

const CentralConocenos = ({setNextComponent, nextComponent}) => {

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

    const width = 125;
    const color = "#FFFFFF";

    const [usuario, setUsuario] = useState({
        
        apellido: '',
        name: '',
    });

    const [error, setError] = useState(false);

    const actualizarState = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value 
        })
    }

    const {name} = usuario;

    const submitUser = e =>{
        e.preventDefault();

        if(name.length < 5){
            console.log('Menor')
            setError(true);
            return;
        }

        
        setNextComponent(true);


    }

 

    return ( 
        <Container>
            <div>
                <img  src={require("../../images/Group4015.png")} style={{marginLeft : "104px"}} alt="1"></img>
                <img  src={require("../../images/Group4019.png")} style={{marginLeft : "164px"}} alt="2"></img>
                <img  src={require("../../images/Group4017.png")} style={{marginLeft : "164px"}} alt="3"></img>
                <img  src={require("../../images/Group4018.png")} style={{marginLeft : "164px"}} alt="4"></img>
            </div>
            <Progress style={{backgroundColor: "#FFFFFF" , width: "814px", marginTop: "15px"}}>
                <Progress style={{backgroundColor: "#FA4D09", width: `${width}px`}}></Progress>
            </Progress>
            <TituloContainer>
                <img  src={require("../../images/Group4014.png")} alt="1"  style={{marginTop: "10px"}}></img>
                <PTitulo style={{marginLeft: "27px", color: "white"}}>TE QUEREMOS </PTitulo>
                <PTitulo style={{marginLeft: "355px", color: "#FA4D09"}}>CONOCER </PTitulo>
            </TituloContainer>

            <p style={{color: `${color}`, fontSize: "24px", marginTop: "55px"}}> Queremos saber qué eres tú, por favor ingresa los siguientes datos: </p>
            
            <form style={{marginBottom: "21px"}}>
                <p style={{color: "#FFFFFF", fontSize: "21px"}}>Nombre (s)</p>
                <TextField 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={actualizarState}
                    
                />
                {error ? <Error/> : null}

                <p style={{color: "#FFFFFF", fontSize: "21px"}}>Apellidos</p>
                <TextField 
                    type="text" 
                    name="apellido"
                    
                />
                
                <DivBoton>
                    <Boton type="submit" onClick={submitUser}>Enviar</Boton>
                </DivBoton>
                
            </form>

        </Container>
            

     );
}
 
export default CentralConocenos;
