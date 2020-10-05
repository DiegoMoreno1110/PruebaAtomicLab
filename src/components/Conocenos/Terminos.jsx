import React, {Fragment} from 'react';
import Footer from '../MainComponents/Footer';
import Logo from '../MainComponents/Logo';
import ContainerTerminos from './ContainerTerminos';


const Terminos = () => {
    return ( 
        <Fragment>
            <div style={{backgroundColor: "#072348"}}>
                <Logo/>
                <ContainerTerminos/>
                <Footer/>
            </div>
        </Fragment>
        
     );
}
 
export default Terminos;
