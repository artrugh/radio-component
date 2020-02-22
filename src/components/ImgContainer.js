import React from 'react';
import uuid from 'uuid';

const ImgContainer = ({radio, turnOff})=> {

    return (
        <div className="img-container"
            style={{
                paddingTop: radio.status ?  "30px": 0
            }}
            key={uuid.v4()}
            >

            <div className="vol-contr"
                key={uuid.v4()}
                style={{
                    height: radio.status ? "40px" : 0,
                    border: radio.status ? "0.5px solid #e1e5eb" : "none"
                }}>
                <span className="less"
                    key={uuid.v4()} >
                    {radio.status ? "-" : ""}
                </span>
            </div>

            <div className="radio-img"
                key={uuid.v4()}
                onClick={(() =>   turnOff())}
                style={{
                    backgroundImage: `url("${radio.image}")`,
                    height: radio.status ? "150px" : 0,
                    border: radio.status ? "0.5px solid #e1e5eb" : "none"
                }} >
            </div>

            <div className="vol-contr"
                key={uuid.v4()}
                style={{
                    height: radio.status ? "40px" : 0,
                    border: radio.status ? "0.5px solid #e1e5eb" : "none"
                }}>
                <span className="more"
                    key={uuid.v4()}>
                    {radio.status ? "+" : ""}
                </span>
            </div>
        </div>
    );
}

export default ImgContainer;
