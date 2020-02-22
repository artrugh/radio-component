import React from 'react';
import uuid from 'uuid';

// components
import RadioHeader from '../components/RadioHeader';
import ImgContainer from '../components/ImgContainer';


const MainContainer = ({setRadio, radios, index}) => {

    return (
        <>
            {radios &&
                <ul>
                    {radios.map((item, ind) =>
                        <div 
                        className = "radio"
                        key={uuid.v4()}
                        id = {item.name.split(" ").join("")}
                        >
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
                        </div>
                    )}
                </ul>
            }
        </>
    )
}


export default MainContainer;
