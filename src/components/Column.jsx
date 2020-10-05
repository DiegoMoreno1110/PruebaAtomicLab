import React from 'react';
import styled from '@emotion/styled';

const Column = ({marginLeft, texto1, texto2, imagen}) => {

    const Container = styled.div`
        width: 305px;
        height: 510px;
        position: absolute;
        margin-top: 49px;
        margin-left: ${marginLeft};
    `;

    const Parrafo = styled.p`
        color: white;
        font-size: 24px;
        width: 282px;
        text-align: left;
        margin-top: -40px;
        margin-left: 40px;

    `;

    return ( 
        <Container>
            <img src={require(`../images/${imagen}.png`)} alt="5" style={{marginTop: "0px", marginLeft: "0px", position: "absolute"}}></img>
            <div>
                <img src={require("../images/ic_check_tiny.png")} alt="5" style={{marginTop: "350px", position: "relative"}}></img>
                <Parrafo>{texto1}</Parrafo>
                <img src={require("../images/ic_check_tiny.png")} alt="5" style={{position: "relative"}}></img>
                <Parrafo>{texto2}</Parrafo>
            </div>

        </Container>
    );
}
 
export default Column;
