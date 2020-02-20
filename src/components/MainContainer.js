import React from 'react';
import uuid from 'uuid';

// component
import Header from './Header';
import Footer from './Footer';
import RadioHeader from './RadioHeader';
import ImgContainer from './ImgContainer';

import { useRadiosStatus } from '../helpers/useHooks';

const MainContainer = props => {

    const [{ radios, index, radioOn }, setRadio] =
        useRadiosStatus(undefined, { radios: props.radios })
        
    return (
        <>
            <div className="main-container"
                key={uuid.v4()} >

                <Header key={uuid.v4()}
                    turnOff={setRadio} />

                {radios &&
                    <ul key={uuid.v4()}>
                        {radios.map((item, ind) =>
                            <>
                                <RadioHeader
                                    setRadio={setRadio}
                                    index={ind}
                                    radio={item}
                                    radioOnIndex={index}
                                    key={uuid.v4()} />
                                <ImgContainer
                                    turnOff={setRadio}
                                    index={ind}
                                    radio={item}
                                    radioOnIndex={index}
                                    key={uuid.v4()} />
                            </>
                        )}
                    </ul>
                }
                <Footer key={uuid.v4()}
                    radioOn={radioOn} />
            </div>
        </>
    );
}

export default MainContainer;