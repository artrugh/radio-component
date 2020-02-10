import React, { useState, useEffect } from 'react';

import uuid from 'uuid';

// component
import Header from './Header';
import Footer from './Footer';
import RadioHeader from './RadioHeader';
import ImgContainer from './ImgContainer';

const MainContainer = props => {

    const [active, setActive] = useState();
    const [radioOn, setRadioOn] = useState();

    useEffect(() => {

        document.title = 'Radio-App'
        // set the status of the radios - default false
        if (!active) {
            let status = [];
            props.radios.map(radio => status.push({ status: false }));
            // store the array in the hook
            setActive(status);
        }
        
    }, [active, props.radios]);

    const onClick = index => {

        // set the active radio channel
        const newStatus = active.map((i, inx) =>
            inx === index ?
                { "status": !active[index].status } :
                { "status": false });

        // store the newStatus
        setActive(newStatus);
        // set the name of the radio on
        setRadioOn(props.radios[index].name)
    }

    const onClickStations = () => {
        setActive();
        setRadioOn()
    }

    return (
        <>
            <div className="main-container" >
                <Header key={uuid.v4()}
                    onClickStations={onClickStations} />
                {active &&
                    <ul>
                        {props.radios.map((radio, index) =>
                            <>
                                <RadioHeader
                                    active={active}
                                    onClick={onClick}
                                    index={index}
                                    radio={radio}
                                    key={uuid.v4()}
                                />
                                <ImgContainer
                                    active={active}
                                    index={index}
                                    radio={radio}
                                    key={uuid.v4()}
                                />
                            </>
                        )}
                    </ul>
                }
                <Footer key={uuid.v4()} radioOn={radioOn} />
            </div>
        </>
    );
}

export default MainContainer;