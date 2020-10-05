import React, {Fragment} from 'react';
import Footer from '../MainComponents/Footer';
import Logo from '../MainComponents/Logo';
import ContainerValidaCelular from './ContainerValidaCelular';


const Valida = () => {
    return ( 
        <Fragment>
            <div style={{backgroundColor: "#072348"}}>
                <Logo/>
                <ContainerValidaCelular/>
                <Footer/>
            </div>
        </Fragment>
        
     );
}
 
export default Valida;
