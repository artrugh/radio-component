import React from 'react';
import uuid from 'uuid';

const ImgContainer = props => {

    return (
        <div className="img-container"
            style={{
                paddingTop: props.radio.status ?  "30px": 0
            }}>

            <div className="vol-contr"
                key={uuid.v4()}
                style={{
                    height: props.radio.status ? "40px" : 0,
                    border: props.radio.status ? "0.5px solid #e1e5eb" : "none"
                }}>
                <span className="less"
                    key={uuid.v4()} >
                    {props.radio.status ? "-" : ""}
                </span>
            </div>

            <div className="radio-img"
                key={uuid.v4()}
                onClick={(() =>   props.turnOff())}
                style={{
                    backgroundImage: `url("${props.radio.image}")`,
                    height: props.radio.status ? "150px" : 0,
                    border: props.radio.status ? "0.5px solid #e1e5eb" : "none"
                }} >
            </div>

            <div className="vol-contr"
                key={uuid.v4()}
                style={{
                    height: props.radio.status ? "40px" : 0,
                    border: props.radio.status ? "0.5px solid #e1e5eb" : "none"
                }}>
                <span className="more"
                    key={uuid.v4()}>
                    {props.radio.status ? "+" : ""}
                </span>
            </div>
        </div>
    );
}

export default ImgContainer;
