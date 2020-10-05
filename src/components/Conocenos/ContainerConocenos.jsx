import React, {useState} from 'react';
import styled from "@emotion/styled";
import CentralConocenos from './CentralConocenos';
import Image from './Image'; 
import ContainerValidaCelular from './ContainerValidaCelular';

const ContainerConocenos = () => {

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
                    ? <ContainerValidaCelular/>
                    : [<CentralConocenos
                        key={1}
                        setNextComponent={setNextComponent}
                        nextComponent={nextComponent}
                      />,
                      <Image
                        key={2}
                        image={"Group4033"}
                    />]
            }
            
        </Container>
     );
}
 
export default ContainerConocenos;