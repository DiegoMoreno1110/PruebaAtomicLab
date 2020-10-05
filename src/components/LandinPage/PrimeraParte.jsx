import React, {Fragment} from 'react';
import styled from "@emotion/styled";
import Logo from '../MainComponents/Logo';
import WhiteButton from './WhiteButton';


const Container = styled.div`
    background-color: #072348;
    width: auto;
    height: 761px;
`;

const Imagen  =  styled.img`
    margin-top: 22px;
    margin-left: 108px;
    position: absolute;
`;

const DivRight = styled.div`
    margin-left: 737px;
    margin-top: 90px;
    height: 300px;
    width: 521px;

`;

const Text = styled.p`
    text-align: left;
    font-weight: bold;
    padding-top:0px;
    margin-top: -0px;
    margin-bottom: -0px;
`;




const PrimeraParte = () => {
    return ( 
        <Fragment>
            <Container style={{ backgroundImage: `url(require("../../images/MaskGroup1.png"))` }} >
                <Logo/>
                <Imagen  src={require("../../images/Group4032.png")} alt="linkedIn_logo"/>
                <DivRight>
                    <Text style={{fontSize:"62px", color:"white"}}>Desarrolla todo</Text>
                    <Text style={{fontSize:"66px", color:"#FA4D09"}}>tu POTENCIAL</Text>
                    <Text style={{fontSize:"52px", color:"white"}}>dentro del equipo</Text>
                    <Text style={{fontSize:"69px", color:"#FA4D09"}}>ATOMICLABS</Text>
                    <div style={{marginTop: "52px", marginLeft:"79px"}}>
                        <WhiteButton texto={"¡Quiero ser parte!"}/>
                    </div>
                </DivRight> 

            </Container>

        </Fragment>
    );
}
 
export default PrimeraParte;
