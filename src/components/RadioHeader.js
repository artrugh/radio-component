import React from 'react';

import uuid from 'uuid';

const RadioHeader = props => {
    
    return (
        <div className="radio-details"
            key={uuid.v4()}
            onClick={(() => props.onClick(props.index))} >
            <h2
                className="radio-link"
                key={uuid.v4()}
                style={{
                    color: !props.active[props.index].status ? "#e1e5eb" : "#edae61"
                }}>
                {props.radio.name}
            </h2>
            <p key={uuid.v4()}>{props.radio.frequency}</p>
        </div>
    );
}

export default RadioHeader;
