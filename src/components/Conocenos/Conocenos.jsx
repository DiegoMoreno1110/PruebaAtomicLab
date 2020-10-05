import React, {Fragment} from 'react';
import Footer from '../MainComponents/Footer';
import Logo from '../MainComponents/Logo';
import ContainerConocenos from './ContainerConocenos';


const Conocenos = () => {
    return ( 
        <Fragment>
            <div style={{backgroundColor: "#072348"}}>
                <Logo/>
                <ContainerConocenos/>
                <Footer/>
            </div>
        </Fragment>
        
     );
}
 
export default Conocenos;
