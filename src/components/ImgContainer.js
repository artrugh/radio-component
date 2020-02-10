import React from 'react';
import uuid from 'uuid';

const ImgContainer = props => {

    return (
        <div className="img-container"
            style={{
                height: !props.active[props.index].status ? 0 : null,
                paddingTop: !props.active[props.index].status ? 0 : "30px"
            }}>

            <div className="vol-contr"
                key={uuid.v4()}
                style={{
                    height: !props.active[props.index].status ? 0 : null,
                    border: props.active[props.index].status ? "0.5px solid #e1e5eb" : "none"
                }}>
                <span className="less"
                    key={uuid.v4()} >
                    {props.active[props.index].status ? "-" : ""}
                </span>
            </div>

            <div className="radio-img"
                key={uuid.v4()}
                style={{
                    backgroundImage: `url("${props.radio.image}")`,
                    height: !props.active[props.index].status ? 0 : null,
                    border: props.active[props.index].status ? "0.5px solid #e1e5eb" : "none"
                }} >
            </div>

            <div className="vol-contr"
                key={uuid.v4()}
                style={{
                    height: !props.active[props.index].status ? 0 : null,
                    border: props.active[props.index].status ? "0.5px solid #e1e5eb" : "none"
                }}>
                <span className="more"
                    key={uuid.v4()}>
                    {props.active[props.index].status ? "+" : ""}
                </span>
            </div>
        </div>
    );
}

export default ImgContainer;
