import React, {Fragment} from 'react';
import CuartaParte from './CuartaParte';
import Footer from './Footer';
import PrimeraParte from './PrimeraParte';
import QuintaParte from './QuintaParte';
import SegundaParte from './SegundaParte';
import TerceraParte from './TerceraParte';

const LandingPage = () => {
    return ( 

        <Fragment>
            <PrimeraParte/>
            <SegundaParte/>
            <TerceraParte/>
            <CuartaParte/>
            <QuintaParte/>
            <Footer/>

        </Fragment>
        
     );
}
 
export default LandingPage;