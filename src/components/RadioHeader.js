import React from 'react';

import uuid from 'uuid';

const RadioHeader = props => {

    return (
        <div className="radio-details"
            key={uuid.v4()}
            onClick={(() =>
                props.radioOnIndex !== props.index ?
                    props.setRadio(props.index) :
                    props.setRadio()
            )}>
            <h2
                className="radio-link"
                key={uuid.v4()}
                style={{
                    color: props.radio.status ?
                        "#edae61" : "#e1e5eb"
                }}  >
                {props.radio.name}
            </h2>
            <p key={uuid.v4()}
                style={{
                    color: props.radio.status ?
                        "#edae61" : "#e1e5eb"
                }} >
                {props.radio.frequency}
            </p>
        </div>
    );
}
export default RadioHeader;

