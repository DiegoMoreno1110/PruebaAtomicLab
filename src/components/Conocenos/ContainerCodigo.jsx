import React, {useState} from 'react';
import styled from "@emotion/styled";
import Image from './Image'; 
import CentralCodigo from './CentralCodigo';
import ContainerTerminos from './ContainerTerminos';

const ContainerCodigo = () => {

    const Container = styled.div`
        height: 891px;
        background-color: #072348;
        width: auto;
    `;

    const [nextComponent, setNextComponent] = useState(false);

    return ( 
        <Container>
            {
                nextComponent 
                    ? <ContainerTerminos/>
                    : [<CentralCodigo
                        setNextComponent={setNextComponent}
                      />,
                      <Image
                            image={"Group4034"}
                      />]
            }
        </Container>
     );
}
 
export default ContainerCodigo;