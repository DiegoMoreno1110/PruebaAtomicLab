import React, {Fragment} from 'react';
import Footer from '../MainComponents/Footer';
import Logo from '../MainComponents/Logo';
import ContainerCodigo from './ContainerCodigo';


const Codigo = () => {
    return ( 
        <Fragment>
            <div style={{backgroundColor: "#072348"}}>
                <Logo/>
                <ContainerCodigo/>
                <Footer/>
            </div>
        </Fragment>
        
     );
}
 
export default Codigo;
