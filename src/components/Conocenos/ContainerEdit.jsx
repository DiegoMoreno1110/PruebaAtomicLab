import React, {useState} from 'react';
import styled from "@emotion/styled";
import Image from './Image'; 
import ContainerCodigo from './ContainerCodigo';
import CentralEdit from './CentralEdit';

const ContainerEdit = () => {

    const Container = styled.div`
        height: 891px;
        background-color: #072348;
        width: auto;
    `;

    const [nextComponent] = useState(false);

    return ( 
        <Container>
            {
                nextComponent 
                    ? <ContainerCodigo/>
                    : [<CentralEdit
                        key={1}
                      />,
                      <Image
                            key={2}
                            image={"Group4034"}
                        />]
            }
        </Container>
     );
}
 
export default ContainerEdit;