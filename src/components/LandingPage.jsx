import React, {Fragment} from 'react';
import CuartaParte from './CuartaParte';
import Footer from './Footer';
import PrimeraParte from './PrimeraParte';
import SegundaParte from './SegundaParte';
import TerceraParte from './TerceraParte';

const LandingPage = () => {
    return ( 

        <Fragment>
            <PrimeraParte/>
            <SegundaParte/>
            <TerceraParte/>
            <CuartaParte/>
            <Footer/>

        </Fragment>
        
     );
}
 
export default LandingPage;