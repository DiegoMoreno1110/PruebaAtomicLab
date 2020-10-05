import React, {Fragment} from 'react';
import Footer from '../MainComponents/Footer';
import Logo from '../MainComponents/Logo';
import ContainerEdit from './ContainerEdit';


const Edit = () => {
    return ( 
        <Fragment>
            <div style={{backgroundColor: "#072348"}}>
                <Logo/>
                <ContainerEdit/>
                <Footer/>
            </div>
        </Fragment>
        
     );
}
 
export default Edit;
