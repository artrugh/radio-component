import React from 'react';

// component
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer'

import { useRadiosStatus } from '../helpers/useHooks';

const RadioStation = props => {

    const [{ radios, index, radioOn }, setRadio] =
        useRadiosStatus(undefined, { radios: props.radios })        

    return (
        <>
            <div className="main-container">
                <Header
                    turnOff={setRadio} />
                <MainContainer
                    setRadio={setRadio}
                    index={index}
                    radios={radios} />
                <Footer
                    radioOn={radioOn} />
            </div>
        </>
    );
}

export default RadioStation;