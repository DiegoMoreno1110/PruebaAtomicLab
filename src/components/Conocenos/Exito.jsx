import React, {Fragment} from 'react';
import Footer from '../MainComponents/Footer';
import Logo from '../MainComponents/Logo';
import ContainerExito from './ContainerExito';
import ContainerTerminos from './ContainerTerminos';


const Exito = () => {
    return ( 
        <Fragment>
            <div style={{backgroundColor: "#072348"}}>
                <Logo/>
                <ContainerExito/>
                <Footer/>
            </div>
        </Fragment>
        
     );
}
 
export default Exito;
